const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const keys = require("../../configs/keys");
const passport = require("passport");

// Importing Users Model
const User = require("../../models/User");

/*
  Route: GET to api/users/test
  Description: Test Route to Users
  Access: public
*/
router.get("/test", (req, res) => {
  res.json({ message: "Successful Test to users." });
});

/*
  Route: GET to api/users/privatetest
  Description: Test Private Route to Users
  Access: private
*/
router.get("/privatetest", passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({ message: "Successful Test to Private users." });
});

/*
  Route: Post to api/users/register
  Description: Register an User
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
  Route: Post to api/users/login
  Description: Login as User
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

module.exports = router;
