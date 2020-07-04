const mongoose = require("mongoose");

const assuranceSchema = new mongoose.Schema({
  id_Car: {
    type: String,
    required: true,
  },
  date_pay: {
    type: Date,
   required: true,
   
  },

  date_exp: {
    type: Date,
    required: true,
  },

  montant: {
    type: Number,
    required: false,
  },
});

const Assurance = mongoose.model("assurance", assuranceSchema);
module.exports = Assurance;
