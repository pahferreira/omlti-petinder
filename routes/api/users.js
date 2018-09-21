const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../configs/keys");
const passport = require("passport");

const User = require("../../models/User");

/*
  Route: GET to api/users/test
  Description: Teste de rota
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Successful Test to users." });
});

/*
  Route: GET to api/users/privatetest
  Description: Teste de rotas privadas
  Access: private
*/
router.get("/privatetest", passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({ message: "Successful Test to Private users." });
});

/*
  Route: POST to api/users/register
  Description: Rota para registro de usuário
  Access: public
*/
router.post("/register", (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user) {
        res.status(400).json({error: "Email já cadastrado."});
      }else {
        const newUser = new User({
          nome: req.body.nome,
          email: req.body.email,
          senha: req.body.senha
        });
        bcrypt.genSalt(10, (error, salt) => {
          bcrypt.hash(newUser.senha, salt, (err, hash) => {
            if (err) throw err;
            newUser.senha = hash            
            newUser.save()
              .then(newUser => res.json(newUser))
              .catch(err => console.log(err))
          })
        });
      }
    })
});

/*
  Route: POST to api/users/login
  Description: Rota para login de usuário
  Access: public
*/
router.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.senha;
  User.findOne({email})
    .then(user => {
      if (!user) res.status(400).json({error: "Usuário não encontrado."});
      bcrypt.compare(password, user.senha)
        .then(isMatch => {
          if (!isMatch) res.status(400).json({error: "Senha incorreta."});
          const payload = {
            id: user.id,
            email: user.email,
            nome: user.nome
          }
          jwt.sign(payload, keys.secretJWT, {expiresIn: "1 day"}, (err, token) => {
            if (err) throw err;
            res.json({
              success: true,
              token: `Bearer ${token}`
            })
          })
        })
    })
})

/*
  Route: GET to api/users/current
  Description: Rota para perfil do usuário que está logado
  Access: private
*/
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
  res.json(req.user);
});

/*
  Route: POST to api/users/edit
  Description: Rota para editar o perfil do usuário logado
  Access: private
*/
router.post('/edit', passport.authenticate('jwt', {session: false}), (req, res) => {
  const newInfo = {};
  if(req.body.foto) newInfo.foto = req.body.foto;
  if(req.body.nome) newInfo.nome = req.body.nome;
  if(req.body.sexo) newInfo.sexo = req.body.sexo;
  if(req.body.tipoDeResidencia) newInfo.tipoDeResidencia = req.body.tipoDeResidencia;
  if (req.body.endereco){
    newInfos.endereco = {};
    if(req.body.endereco.bairro) {
      newInfo.endereco.bairro = req.body.endereco.bairro;
    }
    if(req.body.endereco.rua) {
      newInfo.endereco.rua = req.body.endereco.rua;
    }
    if(req.body.endereco.cidade) {
      newInfo.endereco.cidade = req.body.endereco.cidade;
    }
  }
  User.findById(req.body.id)
    .then(user => {
      if (!user) return res.status(404).json({ message: "Usuário não encontrado." });
      else {
        User.findByIdAndUpdate(req.body.id, newInfo, { new: true })
          .then(updatedUser => res.json(updatedUser));
      }
  });
});

module.exports = router;
