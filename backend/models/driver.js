const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const busTransportSchema = new mongoose.Schema(
  {
    // Authentication Fields
    userId: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },

    // Bus Information
    busNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    // Driver Information
    driverName: {
      type: String,
      required: true,
      trim: true,
    },
    driverContactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    driverAddress: {
      type: String,
      required: true,
      trim: true,
    },
    driverLicenceNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    driverDateOfBirth: {
      type: String,
      required: true,
    },

    // Conductor Information
    conductorName: {
      type: String,
      required: true,
      trim: true,
    },
    conductorContactNumber: {
      type: String,
      required: true,
      trim: true,
    },
    conductorAddress: {
      type: String,
      required: true,
      trim: true,
    },
    conductorDateOfBirth: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields automatically
  }
);

// Pre-save middleware to hash password
busTransportSchema.pre("save", async function (next) {
  // Only hash the password if it has been modified (or is new)
  if (!this.isModified("password")) return next();

  try {
    // Generate salt and hash password
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare password
busTransportSchema.methods.comparePassword = async function (
  candidatePassword
) {
  return await bcrypt.compare(candidatePassword, this.password);
};

// Create the model
const BusTransport = mongoose.model("BusTransport", busTransportSchema);

module.exports = BusTransport;
