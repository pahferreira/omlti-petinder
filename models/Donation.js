const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DonationSchema = new Schema({
  data: {
    type: Date,
    default: Date.now
  },
  produto: {
    type: String,
    required: true
  },
  quantidade: {
    type: String,
    required: true
  },
  pet: {
    type: Schema.Types.ObjectId,
    ref: "pets"
  },
  doador: {
    type: Schema.Types.ObjectId,
    ref: "users"
  }
});

module.exports = Donation = mongoose.model("donations", DonationSchema);
