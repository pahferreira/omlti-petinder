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

module.exports = router;
