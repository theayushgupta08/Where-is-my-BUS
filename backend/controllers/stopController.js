// const Stop = require("../models/stop"); // Commented out - using static data
const { staticStops } = require("../data/staticData");

// In-memory storage for stops (simulating database)
let stops = [...staticStops];


// Add a new stop
const addStop = async (req, res) => {
  try {
    const { stopId, stopName, latitude, longitude } = req.body;

    // Check for incomplete information
    if (!stopName || !latitude || !longitude || !stopId) {
      return res.status(400).json({ message: "Incomplete information" });
    }

    // Check if the stop already exists
    const existingStop = stops.find(s => s.stopId === stopId);
    if (existingStop) {
      return res.status(400).json({ message: "Stop already exists" });
    }

    // Create a new stop instance
    const newStop = {
      _id: `stop${Date.now()}`,
      stopId,
      stopName,
      latitude,
      longitude,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    stops.push(newStop);
    res.status(201).json({ message: "Stop added successfully", stop: newStop });
  } catch (error) {
    console.error("Error adding stop:", error);
    res
      .status(500)
      .json({ message: "Error adding stop", error: error.message });
  }
};

// Get stop by stop Id
const getStopById = async (req, res) => {
  try {
    const { stopId } = req.params;

    // Find the stop by stopId
    const stop = stops.find(s => s.stopId === stopId);

    if (!stop) {
      return res.status(404).json({ message: "Stop not found" });
    }

    res.status(200).json(stop);
  } catch (error) {
    console.error("Error fetching stop:", error);
    res.status(500).json({ message: "Error fetching stop", error: error.message });
  }
};


// Delete a stop by name
const deleteStop = async (req, res) => {
  try {
    const { stopId } = req.params; // Assuming stop name is passed in the request body

    // Delete the stop from the array
    const stopIndex = stops.findIndex(s => s.stopId === stopId);
    if (stopIndex === -1) {
      return res.status(404).json({ message: "Stop not found" });
    }

    const deletedStop = stops.splice(stopIndex, 1)[0];

    res
      .status(200)
      .json({ message: "Stop deleted successfully", stop: deletedStop });
  } catch (error) {
    console.error("Error deleting stop:", error);
    res
      .status(500)
      .json({ message: "Error deleting stop", error: error.message });
  }
};



// Show all stops
const showStops = async (req, res) => {
  try {
    // Check if there are any stops
    if (stops.length === 0) {
      return res.status(404).json({ message: "No stops found" });
    }

    // Return the list of stops
    res.status(200).json(stops);
  } catch (error) {
    console.error("Error retrieving stops:", error);
    res
      .status(500)
      .json({ message: "Error retrieving stops", error: error.message });
  }
};

// Validate Stop for Route
const validateStops = async (req, res) => {
  try {
    const { stops: requestedStops } = req.body;
    const existingStopIds = stops.map(stop => stop.stopId);

    const missingStops = requestedStops.filter(stop => !existingStopIds.includes(stop));

    res.status(200).json({ missingStops });
  } catch (error) {
    console.error('Error validating stops:', error);
    res.status(500).json({ message: 'Error validating stops', error: error.message });
  }
};


module.exports = {
  addStop,
  deleteStop,
  showStops,
  getStopById,
  validateStops,
};