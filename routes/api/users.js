const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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

module.exports = router;
