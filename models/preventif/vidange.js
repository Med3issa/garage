const mongoose = require("mongoose");

const vidangeSchema = new mongoose.Schema({
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

const Vidange = mongoose.model("vidange", vidangeSchema);
module.exports = Vidange;
