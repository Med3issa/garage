const mongoose = require("mongoose");

const chaineSchema = new mongoose.Schema({
    id_Car: {
      type: String,
      required: true,
    },
    kminit: {
      type: Number,
      required: true,
    },
    kmproch: {
      type: Number,
      required: true,
    },
  
    monton: {
      type: Number,
      required: true,
    },
  });
  
  const Chaine = mongoose.model("Chaine", chaineSchema);
  module.exports = Chaine;