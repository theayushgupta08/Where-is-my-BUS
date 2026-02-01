// const Admin = require('../models/admin'); // Commented out - using static data
const bcrypt = require('bcrypt'); // Import bcrypt if passwords are hashed
const { staticUsers } = require('../data/staticData');

const userAuth = async(req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username exists in static data
    const user = staticUsers.find(u => u.username === username);

    if (!user) {
      // If no user found with the username, send a 401 Unauthorized response
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If passwords are hashed in the database, use bcrypt to compare
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid username or password' });
    }

    // If both username and password are correct, return user info including role
    res.status(200).json({ 
      message: 'Authentication successful',
      user: {
        username: user.username,
        role: user.role
      }
    });
  } catch (error) {
    console.error('Error during authentication:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Keep adminAuth for backward compatibility
const adminAuth = userAuth;

// Get user profile by username
const getUserProfile = async(req, res) => {
  try {
    const { username } = req.params;
    const { staticUsers, staticDrivers } = require('../data/staticData');

    // Find user in staticUsers
    const user = staticUsers.find(u => u.username === username);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    let profileData = {
      username: user.username,
      role: user.role,
      _id: user._id
    };

    // If driver, get additional driver details
    if (user.role === 'driver') {
      let driver = null;
      if (username === 'driver') {
        driver = staticDrivers[0];
      } else {
        driver = staticDrivers.find(d => d.userId === username);
      }
      
      if (driver) {
        profileData = {
          ...profileData,
          userId: driver.userId,
          busNumber: driver.busNumber,
          driverName: driver.driverName,
          driverContactNumber: driver.driverContactNumber,
          driverAddress: driver.driverAddress,
          driverLicenceNumber: driver.driverLicenceNumber,
          driverDateOfBirth: driver.driverDateOfBirth,
          conductorName: driver.conductorName,
          conductorContactNumber: driver.conductorContactNumber,
          conductorAddress: driver.conductorAddress,
          conductorDateOfBirth: driver.conductorDateOfBirth
        };
      }
    }

    // If admin, add admin-specific fields
    if (user.role === 'admin') {
      profileData = {
        ...profileData,
        adminName: 'Super Admin',
        email: 'admin@busapp.com',
        contactNumber: '9876543210',
        department: 'Transport Management'
      };
    }

    // If passenger, add passenger-specific fields
    if (user.role === 'passenger') {
      profileData = {
        ...profileData,
        passengerName: 'John Doe',
        email: 'passenger@busapp.com',
        contactNumber: '9876543215',
        address: '123 Passenger Street, City',
        dateOfBirth: '2000-01-15'
      };
    }

    res.status(200).json({
      message: 'Profile retrieved successfully',
      profile: profileData
    });
  } catch (error) {
    console.error('Error getting user profile:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  adminAuth,
  userAuth,
  getUserProfile
};