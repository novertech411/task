const Flight = require("../models/Flight");

exports.all = async (req, res) => {
  try {
    const allFlight = await Flight.find();
    console.log(allFlight);
    res.send("all flight");
  } catch (err) {
    res.send(err);
  }
};

exports.add = async (req, res) => {
  const newflight = new Flight(req.body);
  try {
    const newEntry = await newflight.save();
    console.log(newEntry);
    res.send("Flight suss book");
  } catch (err) {
    console.log(err);
  }
};
exports.single = async (req, res) => {
  const oneFlight = { id: 0, title: 1 };
  try {
    const singleFlight = await Flight.find().projection(oneFlight);
    console.log(singleFlight);
    res.send("flight");
  } catch (err) {
    res.send(err);
  }
};

exports.example = (req, res) => {
  console.log("example");
  res.send("Flight example");
};

exports.example = (req, res) => {
  console.log("example");
  res.send("Flight example");
};

