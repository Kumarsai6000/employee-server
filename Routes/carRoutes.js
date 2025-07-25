const express = require("express");
const router = express.Router();

const {
  createCar,
  createManyCars,
  getAllCars,
} = require("../controllers/carController");

// POST: Add one car
router.post("/add", createCar);

// POST: Add multiple cars
router.post("/add-many", createManyCars);

// GET: Get all cars
router.get("/", getAllCars);

module.exports = router;
