const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
require("dotenv").config();

const Admin = require("./models/admin"); // Import the Admin model

const addAdmin = async () => {
  try {
    // Connect to the database
    await mongoose.connect(process.env.DBURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    // Define admin credentials
    const username = "admin"; // Replace with your desired username
    const password = "admin123"; // Replace with your desired password

    // Check if the admin already exists
    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      console.log("Admin already exists");
      return;
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new admin
    const newAdmin = new Admin({
      username,
      password: hashedPassword,
    });

    // Save the admin to the database
    await newAdmin.save();
    console.log("Admin added successfully");
  } catch (error) {
    console.error("Error adding admin:", error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
};

addAdmin();