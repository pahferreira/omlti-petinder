const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");

//Importação dos handles para as rotas específicas.
const users = require("./routes/api/users");
const pets = require("./routes/api/pets");
const donations = require("./routes/api/donations");
const adoptions = require("./routes/api/adoptions");

//Criando a aplicação Express
const app = express();
//Escolhendo a porta da aplicação
const port = process.env.PORT || 5000;

//Conectando ao banco de dados
const db = require("./configs/keys").mongoURI;
mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("Banco de Dados Conectado."))
  .catch(err => console.log(err));

//Adicionando o middleware do BodyParser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Iniciando o Passport para utilizar nas autenticações
passport.initialize();
require('./configs/passport')(passport);

//Rotas
app.use("/api/users", users);
app.use("/api/pets", pets);
app.use("/api/donations", donations);
app.use("/api/adoptions", adoptions);

app.listen(port, () => console.log(`Server rodando na porta: ${port}`));
