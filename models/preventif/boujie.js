const mongoose = require("mongoose");

const boujieSchema = new mongoose.Schema({
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
  
  const Boujie = mongoose.model("Boujie", boujieSchema);
  module.exports = Boujie;