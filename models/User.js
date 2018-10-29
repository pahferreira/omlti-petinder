const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  foto:{
    type: String,
  },
  nome: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String
  },
  senha: {
    type: String,
    required: true
  },
  sexo: {
    type: String
  },
  endereco: {
    bairro: String,
    rua: String,
    cidade: String,
    num: Number,
    uf: String,
    comp: String,
    coord: {
      lat: Number,
      lon: Number
    },
    tipo: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
