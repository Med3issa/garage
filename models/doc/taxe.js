const mongoose = require("mongoose");

const taxeSchema = new mongoose.Schema({
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
    required: true,
  },
});

const Taxe = mongoose.model("taxe", taxeSchema);
module.exports = Taxe;
