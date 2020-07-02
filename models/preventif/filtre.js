const mongoose = require("mongoose");

const filtreSchema = new mongoose.Schema({
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
    type :{
      type: Number,
      required: true,
    },
    monton: {
      type: Number,
      required: true,
    },
  });
  
  const Filtre = mongoose.model("filtre", filtreSchema);
  module.exports = Filtre;