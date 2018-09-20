const express = require("express");
const router = express.Router();
const passport = require("passport");

const Pet = require("../../models/Pet");

/*
  Route: GET to api/pets/test
  Description: Test Route to Pets
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Successful Test to pets." });
});

/*
  Route: GET to api/pets/all
  Description: Retorna todos os pets cadastrados
  Access: public
*/
router.get("/all", (req, res) => {
  Pet.find()
    .then(pets => res.json(pets))
    .catch(err => console.log(err));
});


/*
  Route: POST to api/pets/create
  Description: Rota para criar pet
  Access: private
*/
router.post('/create', passport.authenticate('jwt', { session: false }), (req, res) => {
  const newPet = new Pet({
    nome: req.body.nome,
    sexo: req.body.sexo,
    descricao: req.body.descricao,
    porte: req.body.porte,
    fotos: req.body.fotos,
    responsavel: req.user.id
  });
  newPet.save()
    .then(pet => res.json(pet))
    .catch(err => console.log(err));
})

/*
  Route: GET to api/pets/:petID
  Description: Rota para retornar as infos de um pet
  Access: public
*/
router.get("/:petID", (req, res) => {
  Pet.findById(req.params.petID)
    .then(pet => {
    if (!pet) res.status(404).json({ message: "Pet não encontrado." });
      res.json(pet);
    });
});

/*
  Route: POST to api/pets/:petID
  Description: Rota para atualizar as infos de um pet
  Access: private
*/
router.post("/:petID", passport.authenticate('jwt', { session: false }),(req, res) => {
  const petInfos = {};
  if (req.body.nome) petInfos.nome = req.body.nome;
  if (req.body.sexo) petInfos.sexo = req.body.sexo;
  if (req.body.descricao) petInfos.descricao = req.body.descricao;
  if (req.body.fotos) petInfos.fotos = req.body.fotos;
  if (req.body.porte) petInfos.porte = req.body.porte;

  Pet.findById(req.params.petID)
    .then(pet => {
      if (!pet) return res.status(404).json({ message: "Pet não encontrado." });
      if (!pet.responsavel == req.user.id) {
        res.status(404).json({ message: "Não existe responsável com esse pet." });
      } else {
        Pet.findByIdAndUpdate(pet.id, petInfos, { new: true })
          .then(pet => res.json(pet));
      }
    });
});

/*
  Route: DELETE to api/pets/:petID
  Description: Rota para deletar um pet
  Access: private
*/
router.delete("/:petID", passport.authenticate('jwt', { session: false }), (req, res) => {
  Pet.findById(req.params.petID)
    .then(pet => {
      if (!pet) return res.status(404).json({ message: "Pet não encontrado." });
      if (!pet.responsavel == req.user.id) {
        res.status(404).json({ message: "Não existe responsável com esse pet." });
      } else {
        Pet.findByIdAndDelete(pet.id)
          .then(pet => res.json({success: true, pet}));
      }
    }).catch(err => console.log(err));
});

module.exports = router;
