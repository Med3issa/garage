const mongoose = require("mongoose");

const PneuSchema= new mongoose.Schema({
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
  
  const Pneu = mongoose.model("Pneu", PneuSchema);
  module.exports = Pneu;