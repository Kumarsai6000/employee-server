const Car = require("../models/Car");

// POST: Add one car
const createCar = async (req, res) => {
  try {
    const car = new Car(req.body);
    await car.save();
    res.status(201).json(car);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST: Add multiple cars
const createManyCars = async (req, res) => {
  try {
    const cars = req.body;
    if (!Array.isArray(cars)) {
      return res.status(400).json({ message: "Expected array of car objects" });
    }
    const result = await Car.insertMany(cars);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET: All cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  createCar,
  createManyCars,
  getAllCars,
};
