const BusTransport = require("../models/driver");
const bcrypt = require("bcrypt");

const busTransportController = {
  // Add new driver

  async addDriver(req, res) {
    try {
      const {
        userId,
        password,
        busNumber,
        driverName,
        driverContactNumber,
        driverAddress,
        driverLicenceNumber,
        driverDateOfBirth,
        conductorName,
        conductorContactNumber,
        conductorAddress,
        conductorDateOfBirth,
      } = req.body;

      // Validate required fields
      const requiredFields = [
        "userId",
        "password",
        "busNumber",
        "driverName",
        "driverContactNumber",
        "driverAddress",
        "driverLicenceNumber",
        "driverDateOfBirth",
      ];

      const missingFields = requiredFields.filter((field) => !req.body[field]);
      if (missingFields.length > 0) {
        return res.status(400).json({
          message: "Missing required fields",
          fields: missingFields,
        });
      }

      // Check existing user
      const existingUser = await BusTransport.findOne({ userId });
      if (existingUser) {
        return res.status(409).json({
          message: "User ID already exists",
        });
      }

      // Check existing license
      const existingDriver = await BusTransport.findOne({
        driverLicenceNumber,
      });
      if (existingDriver) {
        return res.status(409).json({
          message: "Driver with this license number already exists",
        });
      }

      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newTransport = new BusTransport({
        userId,
        password: hashedPassword,
        busNumber,
        driverName,
        driverContactNumber,
        driverAddress,
        driverLicenceNumber,
        driverDateOfBirth,
        conductorName,
        conductorContactNumber,
        conductorAddress,
        conductorDateOfBirth,
      });

      await newTransport.save();

      const response = newTransport.toObject();
      delete response.password;

      res.status(201).json({
        message: "Driver and transport details added successfully",
        data: response,
      });
    } catch (error) {
      console.error("Error adding driver:", error);
      res.status(500).json({
        message: "Error adding driver",
        error: error.message,
      });
    }
  },


  getDriverByUserId: async (req, res) => {
    try {
      const { userId } = req.params;
      const driver = await BusTransport.findOne({ userId });
      if (!driver) {
        return res.status(404).json({
          success: false,
          message: "Driver not found",
        });
      }
      res.status(200).json({
        success: true,
        data: driver,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching driver",
        error: error.message,
      });
    }
  },


  // Update driver
  // async updateDriver(req, res) {
  //   try {
  //     const { userId, ...updateData } = req.body;

  //     if (updateData.password) {
  //       const salt = await bcrypt.genSalt(10);
  //       updateData.password = await bcrypt.hash(updateData.password, salt);
  //     }

  //     if (updateData.driverDateOfBirth) {
  //       updateData.driverDateOfBirth = new Date(updateData.driverDateOfBirth);
  //     }
  //     if (updateData.conductorDateOfBirth) {
  //       updateData.conductorDateOfBirth = new Date(
  //         updateData.conductorDateOfBirth
  //       );
  //     }

  //     const updatedTransport = await BusTransport.findOneAndUpdate(
  //       { userId },
  //       { $set: updateData },
  //       { new: true, runValidators: true }
  //     );

  //     if (!updatedTransport) {
  //       return res.status(404).json({
  //         message: "Driver not found with this license number",
  //       });
  //     }

  //     const response = updatedTransport.toObject();
  //     delete response.password;

  //     res.status(200).json({
  //       message: "Driver details updated successfully",
  //       data: response,
  //     });
  //   } catch (error) {
  //     console.error("Error updating driver:", error);
  //     res.status(500).json({
  //       message: "Error updating driver",
  //       error: error.message,
  //     });
  //   }
  // },


  // Delete driver
  async deleteDriver(req, res) {
    try {
      const { userId } = req.params;

      const deletedTransport = await BusTransport.findOneAndDelete({
        userId,
      });

      if (!deletedTransport) {
        return res.status(404).json({
          message: "Driver not found with this license number",
        });
      }

      const response = deletedTransport.toObject();
      delete response.password;

      res.status(200).json({
        message: "Driver and associated transport details deleted successfully",
        data: response,
      });
    } catch (error) {
      console.error("Error deleting driver:", error);
      res.status(500).json({
        message: "Error deleting driver",
        error: error.message,
      });
    }
  },


  viewAllDrivers: async (req, res) => {
    try {
      const drivers = await BusTransport.find({}).select("-password");


      if (!drivers.length) {
        return res.status(404).json({
          success: false,
          message: "No drivers found",
        });
      }

      res.status(200).json({
        success: true,
        data: drivers,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Error fetching drivers",
        error: error.message,
      });
    }
  },

  // // Get all drivers
  // async getAllDrivers(req, res) {
  //   try {
  //     const transports = await BusTransport.find({}).select("-password");

  //     if (transports.length === 0) {
  //       return res.status(404).json({
  //         message: "No drivers found in the system",
  //       });
  //     }

  //     res.status(200).json({
  //       message: "Drivers retrieved successfully",
  //       count: transports.length,
  //       data: transports,
  //     });
  //   } catch (error) {
  //     console.error("Error fetching drivers:", error);
  //     res.status(500).json({
  //       message: "Error fetching drivers",
  //       error: error.message,
  //     });
  //   }
  // },
};


module.exports = busTransportController;
