const { staticStudents, staticDrivers, attendanceData } = require('../data/staticData');

// Helper function to get current date in YYYY-MM-DD format
const getCurrentDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const attendanceController = {
  // Get students for a specific driver (based on their bus number)
  async getStudentsByDriver(req, res) {
    try {
      const { driverUsername } = req.params;

      // Find driver by username
      // The login uses username "driver", but drivers have userId like "DRV001"
      // For demo purposes, map username "driver" to first driver
      let driver = null;
      
      if (driverUsername === 'driver') {
        // Use first driver for demo
        driver = staticDrivers[0];
      } else {
        // Try to find by userId
        driver = staticDrivers.find(d => d.userId === driverUsername);
      }
      
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }

      // Get students for this driver's bus
      const students = staticStudents.filter(s => s.busNumber === driver.busNumber);

      res.status(200).json({
        message: 'Students retrieved successfully',
        busNumber: driver.busNumber,
        students: students.map(s => ({
          _id: s._id,
          studentId: s.studentId,
          studentName: s.studentName,
          className: s.className,
          rollNumber: s.rollNumber,
        }))
      });
    } catch (error) {
      console.error('Error getting students:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Get attendance for a specific date
  async getAttendance(req, res) {
    try {
      const { driverUsername } = req.params;
      const { date } = req.query;
      const attendanceDate = date || getCurrentDate();

      // Find driver (same logic as getStudentsByDriver)
      let driver = null;
      
      if (driverUsername === 'driver') {
        driver = staticDrivers[0];
      } else {
        driver = staticDrivers.find(d => d.userId === driverUsername);
      }
      
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }

      // Get attendance for this date and bus
      const dateAttendance = attendanceData[attendanceDate] || {};
      const busAttendance = dateAttendance[driver.busNumber] || {};

      res.status(200).json({
        message: 'Attendance retrieved successfully',
        date: attendanceDate,
        busNumber: driver.busNumber,
        attendance: busAttendance
      });
    } catch (error) {
      console.error('Error getting attendance:', error);
      res.status(500).json({ message: 'Server error' });
    }
  },

  // Mark attendance for students
  async markAttendance(req, res) {
    try {
      const { driverUsername } = req.params;
      const { date, attendance } = req.body;

      if (!attendance || typeof attendance !== 'object') {
        return res.status(400).json({ message: 'Invalid attendance data' });
      }

      const attendanceDate = date || getCurrentDate();

      // Find driver (same logic as getStudentsByDriver)
      let driver = null;
      
      if (driverUsername === 'driver') {
        driver = staticDrivers[0];
      } else {
        driver = staticDrivers.find(d => d.userId === driverUsername);
      }
      
      if (!driver) {
        return res.status(404).json({ message: 'Driver not found' });
      }

      // Initialize date if not exists
      if (!attendanceData[attendanceDate]) {
        attendanceData[attendanceDate] = {};
      }

      // Initialize bus if not exists
      if (!attendanceData[attendanceDate][driver.busNumber]) {
        attendanceData[attendanceDate][driver.busNumber] = {};
      }

      // Update attendance for each student
      Object.keys(attendance).forEach(studentId => {
        attendanceData[attendanceDate][driver.busNumber][studentId] = {
          morning: attendance[studentId].morning || false,
          afternoon: attendance[studentId].afternoon || false,
          updatedAt: new Date()
        };
      });

      res.status(200).json({
        message: 'Attendance marked successfully',
        date: attendanceDate,
        busNumber: driver.busNumber,
        attendance: attendanceData[attendanceDate][driver.busNumber]
      });
    } catch (error) {
      console.error('Error marking attendance:', error);
      res.status(500).json({ message: 'Server error' });
    }
  }
};

module.exports = attendanceController;
