const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  mat: {
    type: String,
    required: true,
    unique: true,
  },

  kilometrage: {
    type: Number,
    required: true,
  },
});

const Car = mongoose.model("car", carSchema);
module.exports = Car;
