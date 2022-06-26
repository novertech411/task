const express = require("express");

const router = express.Router();
const controller = require("../controllers/flightController");

router.patch("/update", controller.update);
router.post("/add", controller.add);
router.get("/all", controller.all);
router.get("/single", controller.single);
router.delete("/delete", controller.delete);


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
