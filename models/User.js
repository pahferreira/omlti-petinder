const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  senha: {
    type: String,
    required: true
  },
  sexo: {
    type: String
  },
  tipoDeResidencia: {
    type: String
  },
  endereco: {
    bairro: String,
    rua: String,
    cidade: String
  }
});

module.exports = User = mongoose.model("users", UserSchema);
