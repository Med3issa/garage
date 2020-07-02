const mongoose = require("mongoose");

const visiteSchema = new mongoose.Schema({
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

const Visite = mongoose.model("visite", visiteSchema);
module.exports = Visite;
