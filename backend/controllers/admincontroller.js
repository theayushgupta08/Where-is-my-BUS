const Admin = require('../models/admin'); // Import the Admin model
const bcrypt = require('bcrypt'); // Import bcrypt if passwords are hashed

const adminAuth = async(req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username exists in the database
    const admin = await Admin.findOne({ username });

    if (!admin) {
      // If no admin found with the username, send a 401 Unauthorized response
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If passwords are hashed in the database, use bcrypt to compare
    const isPasswordValid = await bcrypt.compare(password, admin.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If both username and password are correct
    res.status(200).json({ message: 'Authentication successful' });
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  adminAuth
};