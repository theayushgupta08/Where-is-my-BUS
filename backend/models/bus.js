const mongoose = require("mongoose");
const Stop = require("./stop");

const busSchema = new mongoose.Schema(
  {
    busNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    busName: {
      type: String,
      required: true,
      trim: true,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    sourceStop: {
      type: String,
      // ref: Stop,
      required: true,
    },
    destinationStop: {
      type: String,
      // ref: Stop,
      required: true,
    },
    sourceTime: {
      type: String,
      required: true,
    },
    destinationTime: {
      type: String,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// Add index for better query performance
busSchema.index({ busNumber: 1, registrationNumber: 1 });

// Create the model
const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
