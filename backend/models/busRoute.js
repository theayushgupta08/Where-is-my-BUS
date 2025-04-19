const mongoose = require("mongoose");
const Stop = require("./stop");
const Bus = require("./bus");

// Define the schema for a bus route
const RouteSchema = new mongoose.Schema(
  {
    routeNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Array of route stops with their details
    stops: [{ type: mongoose.Schema.Types.ObjectId, ref: "Stop" }], // Array of stop references

    buses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Bus" }], // Array of bus references

    isActive: {
      type: Boolean,
      default: true,
    },

    totalJourneyTime: {
      type: String,
      required: true,
    },

    operatingDays: [
      {
        type: String,
        enum: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
      },
    ],
  },
  {
    timestamps: true, // Add timestamps for createdAt and updatedAt
  }
);

// Middleware to ensure stops are unique in a route
RouteSchema.pre("save", function (next) {
  if (!this.stops || this.stops.length === 0) {
    return next(new Error("At least one stop must be specified in the route"));
  }

  const stopIds = new Set();
  const duplicates = this.stops.some((stop) => {
    if (stopIds.has(stop.toString())) {
      return true;
    }
    stopIds.add(stop.toString());
    return false;
  });

  if (duplicates) {
    return next(new Error("Duplicate stops are not allowed in a route"));
  }
  next();
});

// Create the model for the route
const Route = mongoose.model("Route", RouteSchema);

module.exports = Route;