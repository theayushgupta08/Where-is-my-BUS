const Bus = require("../models/bus"); // Adjust the path as needed

const busController = {
  // View all buses
  viewAllBuses: async (req, res) => {
    try {
      const buses = await Bus.find()
        .populate("sourceStop", "name")
        .populate("destinationStop", "name");

      if (!buses.length) {
        return res.status(404).json({
          success: false,
          message: "No buses found",
        });
      }

      res.status(200).json({
        success: true,
        data: buses,
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
      const bus = await Bus.findOne({ busNumber });
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
      const existingBus = await Bus.findOne({ busNumber });
      if (existingBus) {
        return res.status(400).json({
          success: false,
          message: "Bus with this number already exists",
        });
      }

      const newBus = new Bus({
        busNumber,
        busName,
        registrationNumber,
        sourceStop,
        destinationStop,
        sourceTime,
        destinationTime,
      });

      await newBus.save();

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

      const deletedBus = await Bus.findOneAndDelete({ busNumber });

      if (!deletedBus) {
        return res.status(404).json({
          success: false,
          message: "Bus not found",
        });
      }

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
      const { buses } = req.body;
      const existingBuses = await Bus.find({ busNumber: { $in: buses } });
      const existingBusNumbers = existingBuses.map(bus => bus.busNumber);

      const missingBuses = buses.filter(bus => !existingBusNumbers.includes(bus));

      res.status(200).json({ missingBuses });
    } catch (error) {
      console.error('Error validating buses:', error);
      res.status(500).json({ message: 'Error validating buses', error: error.message });
    }
  },

};

module.exports = busController;
