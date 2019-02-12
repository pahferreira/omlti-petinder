const mongoose = require("mongoose");

exports.test = (req, res) => {
  res.json({ message: "Teste com Sucesso para Users." });
};

exports.testPrivate = (req, res) => {
	res.json({ message: "Teste com Sucesso para Users. (privado)" });
};


exports.getVarious = (req,res) => {

  let users = JSON.parse(req.params.users)
  User.find({
    '_id' : {
      $in: [
        users["ids"].map(user => mongoose.Types.ObjectId(user))
      ]
    }
  }).then(users => {
    if(!users) res.status(404).json({message: "Não existem usuarios"});
    res.json(users)
  })
}
