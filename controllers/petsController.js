const Pet = require("../../models/Pet");


exports.test = (req, res) => {
	res.json({ message: "Teste com Sucesso para Pets." });
};

exports.getAll = (req, res) => {
	Pet.find()
		.then(pets => res.json(pets))
		.catch(err => console.log(err));
};

exports.available = (req, res) => {
  Pet.find({ adotado: false })
    .then(pets => res.json(pets))
    .catch(err => console.log(err));
};

exports.createPet = (req, res) => {
  const newPet = new Pet({
    nome: req.body.nome,
    sexo: req.body.sexo,
    descricao: req.body.descricao,
    porte: req.body.porte,
    fotos: req.body.fotos,
    responsavel: req.user.id,
    saude: {
      castrado: req.body.castrado,
      vacinas: req.body.vacinas
    }
  });
  newPet.save()
    .then(pet => res.json(pet))
    .catch(err => console.log(err));
};

exports.getPetById = (req, res) => {
  Pet.findById(req.params.petID)
    .then(pet => {
    if (!pet) res.status(404).json({ message: "Pet não encontrado." });
      res.json(pet);
    });
};

exports.updatePetById = (req, res) => {
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
};

exports.deletePetById = (req, res) => {
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
};