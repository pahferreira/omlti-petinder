const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdoptionSchema = new Schema({
  data: {
    type: Date,
    default: Date.now
  },
  pet: {
    type: Schema.Types.ObjectId,
    ref: "pets"
  },
  doador: {
    type: Schema.Types.ObjectId,
    ref: "users"
  },
  adotador: {
    type: Schema.Types.ObjectId,
    ref:"users"
  },
});

module.exports = Adoption = mongoose.model("adoptions", AdoptionSchema);