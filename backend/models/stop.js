const mongoose = require("mongoose");

// Define the schema for a bus stop
const stopSchema = new mongoose.Schema({
  stopId: { type: String, required: true, unique: true }, // Unique stop ID
  stopName: { type: String, required: true }, // Stop name
  latitude: { type: String, required: true }, // Latitude of the stop
  longitude: { type: String, required: true }, // Longitude of the stop
});

// Create the model for the stop
const Stop = mongoose.model("Stop", stopSchema);

module.exports = Stop;
