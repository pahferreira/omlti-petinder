const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  responsavel: {
    type: Schema.Types.ObjectId,
    ref: "users",
    required: true
  },
  fotos:{
    type: [String],
    required: true
  },
  especie: {
    type: String, 
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  idade: Number,
  sexo: {
    type: String,
    required: true
  },
  personalidade: [String],
  descricao: {
    type: String,
    required: true
  },
  porte: {
    type: String,
    required: true
  },
  saude: {
    castrado: {
      type: Boolean,
      required: true
    },
    vacinas: {
      type: Boolean,
      required: true
    }
  },
  adotado: {
    type: Boolean,
    default: false
  }
});

module.exports = Pet = mongoose.model("pets", PetSchema);
