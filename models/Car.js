const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  model: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true },
  rentPerDay: { type: Number, required: true },
  available: { type: Boolean, default: true },
  fuelType: {
    type: String,
    enum: ["Petrol", "Diesel", "Electric", "Hybrid", "CNG"],
  },
  seats: { type: Number, required: true },
  image: { type: String },
});

module.exports = mongoose.model("Car", carSchema);
