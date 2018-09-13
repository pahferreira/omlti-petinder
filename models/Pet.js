const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  name: {
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
    castrado: Boolean,
    vacinas: Boolean
  }
});

module.exports = Pet = mongoose.model("pets", PetSchema);
