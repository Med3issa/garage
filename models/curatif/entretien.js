const mongoose = require("mongoose");

const entretienSchema = new mongoose.Schema({
    id_Car: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
   
  
    monton: {
      type: Number,
      required: true,
    },
  });
  
  const Entretien = mongoose.model("Entretien", entretienSchema);
  module.exports = Entretien;