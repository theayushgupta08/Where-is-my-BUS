// const Bus = require("../models/bus"); // Commented out - using static data
const { staticBuses, findStopByStopId } = require("../data/staticData");

// In-memory storage for buses (simulating database)
let buses = [...staticBuses];

const busController = {
  // View all buses
  viewAllBuses: async (req, res) => {
    try {
      // Populate sourceStop and destinationStop with stop names
      const busesWithStopNames = buses.map(bus => {
        const sourceStopObj = findStopByStopId(bus.sourceStop);
        const destStopObj = findStopByStopId(bus.destinationStop);
        return {
          ...bus,
          sourceStop: sourceStopObj ? { name: sourceStopObj.stopName } : bus.sourceStop,
          destinationStop: destStopObj ? { name: destStopObj.stopName } : bus.destinationStop,
        };
      });

      if (!busesWithStopNames.length) {
        return res.status(404).json({
          success: false,
          message: "No buses found",
        });
      }

      res.status(200).json({
        success: true,
        data: busesWithStopNames,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching buses",
        error: error.message,
      });
    }
  },

  // Get bus by busNumber
  getBusByNumber: async (req, res) => {
    try {
      const { busNumber } = req.params;
      const bus = buses.find(b => b.busNumber === busNumber);
      if (!bus) {
        return res.status(404).json({
          success: false,
          message: "Bus not found",
        });
      }
      res.status(200).json({
        success: true,
        data: bus,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching bus",
        error: error.message,
      });
    }
  },

  // Add new bus
  addBus: async (req, res) => {
    try {
      const {
        busNumber,
        busName,
        registrationNumber,
        sourceStop,
        destinationStop,
        sourceTime,
        destinationTime,
      } = req.body;

      // Check if bus already exists
      const existingBus = buses.find(b => b.busNumber === busNumber);
      if (existingBus) {
        return res.status(400).json({
          success: false,
          message: "Bus with this number already exists",
        });
      }

      const newBus = {
        _id: `bus${Date.now()}`,
        busNumber,
        busName,
        registrationNumber,
        sourceStop,
        destinationStop,
        sourceTime,
        destinationTime,
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      buses.push(newBus);

      res.status(201).json({
        success: true,
        message: "Bus added successfully",
        data: newBus,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error adding bus",
        error: error.message,
      });
    }
  },

  // Update bus by busNumber
  // updateBus: async (req, res) => {
  //   try {
  //     const { busNumber } = req.params;
  //     const updateData = {
  //       busName: req.body.busName,
  //       registrationNumber: req.body.registrationNumber,
  //       sourceStop: req.body.sourceStop,
  //       destinationStop: req.body.destinationStop,
  //       sourceTime: req.body.sourceTime,
  //       destinationTime: req.body.destinationTime,
  //     };

  //     const updatedBus = await Bus.findOneAndUpdate({ busNumber }, updateData, {
  //       new: true,
  //       runValidators: true,
  //     }).populate("sourceStop destinationStop");

  //     if (!updatedBus) {
  //       return res.status(404).json({
  //         success: false,
  //         message: "Bus not found",
  //       });
  //     }

  //     res.status(200).json({
  //       success: true,
  //       message: "Bus updated successfully",
  //       data: updatedBus,
  //     });
  //   } catch (error) {
  //     res.status(500).json({
  //       success: false,
  //       message: "Error updating bus",
  //       error: error.message,
  //     });
  //   }
  // },

  // Delete bus by busNumber
  deleteBus: async (req, res) => {
    try {
      const { busNumber } = req.params;

      const busIndex = buses.findIndex(b => b.busNumber === busNumber);
      if (busIndex === -1) {
        return res.status(404).json({
          success: false,
          message: "Bus not found",
        });
      }

      const deletedBus = buses.splice(busIndex, 1)[0];

      res.status(200).json({
        success: true,
        message: "Bus deleted successfully",
        data: deletedBus,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error deleting bus",
        error: error.message,
      });
    }
  },


  validateBuses: async (req, res) => {
    try {
      const { buses: requestedBuses } = req.body;
      const existingBusNumbers = buses.map(bus => bus.busNumber);

      const missingBuses = requestedBuses.filter(bus => !existingBusNumbers.includes(bus));

      res.status(200).json({ missingBuses });
    } catch (error) {
      console.error('Error validating buses:', error);
      res.status(500).json({ message: 'Error validating buses', error: error.message });
    }
  },

};

module.exports = busController;
