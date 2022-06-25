const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.get("/", controller.example);
router.post("/add", controller.add);
router.get("/all", controller.all);
router.get("/single", controller.single);
router.get("/", controller.example);

module.exports = router;

// 1. Add/Book Flight
// 2. Get all Flight
// 3. Get a single Flight
// 4. Update/Edit Flight
// 5. Delete Flight

// for flight let it have the following properties
// {
// title: "flight to canada",
// time: 1pm,
// price: 26000,
// date: "26-06-2022"
// }
