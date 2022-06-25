const mongoose = require("mongoose");
const flightSchema = new mongoose.Schema({
  title: { type: String },
  time: { type: String },
  price: { type: Number },
  date: { type: String },
});
module.exports = Flight = mongoose.model("flight", flightSchema);
