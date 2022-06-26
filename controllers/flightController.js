const Flight = require("../models/Flight");

exports.all = async (req, res) => {
  try {
    const allFlight = await Flight.find();
    // console.log(allFlight);
    res.send(allFlight);
  } catch (err) {
    res.send(err);
  }
};

exports.add = async (req, res) => {
  const newflight = new Flight(req.body);
  try {
    const newEntry = await newflight.save();
    // console.log(newEntry);
    res.send("Flight suss book");
  } catch (err) {
    console.log(err);
  }
};
exports.single = async (req, res) => {
  const _id = req.query.id;
  try {
    const singleFlight = await Flight.findById(_id, (err, flight) => {
      if (err) {
        res.status(404).json({
          message: "flight not found",
          error: err,
        });
      } else {
        res.status(200).json({
          message: "suss",
          flight_detail: flight,
        });
      }
    });
    // console.log(singleFlight);
    // res.send(singleFlight);
  } catch (err) {
    // res.send(err)
    // console.log(err);
  }
};
exports.update = async (req, res) => {
  const _id = req.query.id;
  try {
    const updateSingleFlight = await Flight.findByIdAndUpdate(
      _id,
      req.body,
      (err, flight) => {
        if (err) {
          res.status(404).json({
            message: "flight not found",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "suss updated ",
          });
        }
      }
    );
    // console.log(singleFlight);
    // res.send(singleFlight);
  } catch (err) {
    // res.send(err)
    // console.log(err);
  }
};

exports.delete = async (req, res) => {
  const _id = req.query.id;
  try {
    const updateSingleFlight = await Flight.findByIdAndDelete(
      _id,
      (err, flight) => {
        if (err) {
          res.status(404).json({
            message: "flight not found",
            error: err,
          });
        } else {
          res.status(200).json({
            message: "suss deleted ",
          });
        }
      }
    );
    // console.log(singleFlight);
    // res.send(singleFlight);
  } catch (err) {
    // res.send(err)
    // console.log(err);
  }
};
