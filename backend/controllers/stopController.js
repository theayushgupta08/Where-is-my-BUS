const Stop = require("../models/stop"); // Adjust the path as needed


// Add a new stop
const addStop = async (req, res) => {
  try {
    const { stopId, stopName, latitude, longitude } = req.body;

    // Check for incomplete information
    if (!stopName || !latitude || !longitude || !stopId) {
      return res.status(400).json({ message: "Incomplete information" });
    }

    // Check if the stop already exists
    const existingStop = await Stop.findOne({ stopId });
    if (existingStop) {
      return res.status(400).json({ message: "Stop already exists" });
    }

    // Create a new stop instance
    const newStop = new Stop({ stopId, stopName, latitude, longitude });

    // Save the stop to the database
    await newStop.save();
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
    const stop = await Stop.findOne({ stopId });

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

    // Delete the stop from the database
    const deletedStop = await Stop.findOneAndDelete({ stopId });

    if (!deletedStop) {
      return res.status(404).json({ message: "Stop not found" });
    }

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
    // Fetch all stops from the database
    const stops = await Stop.find();

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
    const { stops } = req.body;
    const existingStops = await Stop.find({ stopId: { $in: stops } });
    const existingStopIds = existingStops.map(stop => stop.stopId);

    const missingStops = stops.filter(stop => !existingStopIds.includes(stop));

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