// Static data for the application (replaces database)

// Static Users Data with Roles
const staticUsers = [
  {
    _id: "admin1",
    username: "admin",
    password: "$2b$10$LddBViSA/oWd/bQu5QCL3u557uHiZPB365MzIoVm1jUwSmrCftabe", // hashed "admin123"
    role: "admin"
  },
  {
    _id: "driver1",
    username: "driver",
    password: "$2b$10$ntHxguhgbnduj56XifpRa.t8c6SrhF6iy6kOXKpqsiLTa1xZAqnBm", // hashed "driver123"
    role: "driver"
  },
  {
    _id: "passenger1",
    username: "passenger",
    password: "$2b$10$HlxPL7NZev8xik/Vgk9Su.A61p/KZtAY2XcXWvJOr8X7FUt9qTPxK", // hashed "passenger123"
    role: "passenger"
  },
];

// Keep staticAdmins for backward compatibility
const staticAdmins = staticUsers.filter(user => user.role === "admin");

// Static Stop Data
const staticStops = [
  {
    _id: "stop1",
    stopId: "ST001",
    stopName: "Central Station",
    latitude: "28.7041", 
    longitude: "77.1025",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "stop2",
    stopId: "ST002",
    stopName: "University Campus",
    latitude: "28.6139",
    longitude: "77.2090",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "stop3",
    stopId: "ST003",
    stopName: "City Mall",
    latitude: "28.5355",
    longitude: "77.3910",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "stop4",
    stopId: "ST004",
    stopName: "Airport Terminal",
    latitude: "28.5562",
    longitude: "77.1000",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "stop5",
    stopId: "ST005",
    stopName: "Hospital Square",
    latitude: "28.7041",
    longitude: "77.1025",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "stop6",
    stopId: "ST006",
    stopName: "Railway Station",
    latitude: "28.6619",
    longitude: "77.2274",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Static Bus Data
const staticBuses = [
  {
    _id: "bus1",
    busNumber: "BUS001",
    busName: "Express Line 1",
    registrationNumber: "DL-01-AB-1234",
    sourceStop: "ST001",
    destinationStop: "ST002",
    sourceTime: "08:00",
    destinationTime: "09:30",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "bus2",
    busNumber: "BUS002",
    busName: "Express Line 2",
    registrationNumber: "DL-01-CD-5678",
    sourceStop: "ST002",
    destinationStop: "ST003",
    sourceTime: "09:00",
    destinationTime: "10:15",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "bus3",
    busNumber: "BUS003",
    busName: "City Connector",
    registrationNumber: "DL-01-EF-9012",
    sourceStop: "ST001",
    destinationStop: "ST004",
    sourceTime: "10:00",
    destinationTime: "11:00",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "bus4",
    busNumber: "BUS004",
    busName: "Metro Link",
    registrationNumber: "DL-01-GH-3456",
    sourceStop: "ST003",
    destinationStop: "ST005",
    sourceTime: "11:00",
    destinationTime: "12:30",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "bus5",
    busNumber: "BUS005",
    busName: "Airport Shuttle",
    registrationNumber: "DL-01-IJ-7890",
    sourceStop: "ST004",
    destinationStop: "ST006",
    sourceTime: "14:00",
    destinationTime: "15:00",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Static Driver Data
const staticDrivers = [
  {
    _id: "driver1",
    userId: "DRV001",
    password: "$2b$10$ntHxguhgbnduj56XifpRa.t8c6SrhF6iy6kOXKpqsiLTa1xZAqnBm", // hashed "driver123"
    busNumber: "BUS001",
    driverName: "Rajesh Kumar",
    driverContactNumber: "9876543210",
    driverAddress: "123 Main Street, City",
    driverLicenceNumber: "DL1234567890",
    driverDateOfBirth: "1985-05-15",
    conductorName: "Priya Sharma",
    conductorContactNumber: "9876543211",
    conductorAddress: "456 Park Avenue, City",
    conductorDateOfBirth: "1990-08-20",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "driver2",
    userId: "DRV002",
    password: "$2b$10$ntHxguhgbnduj56XifpRa.t8c6SrhF6iy6kOXKpqsiLTa1xZAqnBm", // hashed "driver123"
    busNumber: "BUS002",
    driverName: "Amit Singh",
    driverContactNumber: "9876543212",
    driverAddress: "789 Oak Road, City",
    driverLicenceNumber: "DL0987654321",
    driverDateOfBirth: "1988-03-22",
    conductorName: "Sneha Patel",
    conductorContactNumber: "9876543213",
    conductorAddress: "321 Elm Street, City",
    conductorDateOfBirth: "1992-11-10",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "driver3",
    userId: "DRV003",
    password: "$2b$10$ntHxguhgbnduj56XifpRa.t8c6SrhF6iy6kOXKpqsiLTa1xZAqnBm", // hashed "driver123"
    busNumber: "BUS003",
    driverName: "Vikram Mehta",
    driverContactNumber: "9876543214",
    driverAddress: "654 Pine Lane, City",
    driverLicenceNumber: "DL1122334455",
    driverDateOfBirth: "1987-07-18",
    conductorName: "Anjali Desai",
    conductorContactNumber: "9876543215",
    conductorAddress: "987 Maple Drive, City",
    conductorDateOfBirth: "1991-04-25",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Static Route Data
const staticRoutes = [
  {
    _id: "route1",
    routeNumber: "RT001",
    stops: ["stop1", "stop2", "stop3"], // References to stop _ids
    buses: ["bus1", "bus2"], // References to bus _ids
    totalJourneyTime: "2 hours",
    operatingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "route2",
    routeNumber: "RT002",
    stops: ["stop1", "stop4", "stop6"], // References to stop _ids
    buses: ["bus3", "bus5"], // References to bus _ids
    totalJourneyTime: "1.5 hours",
    operatingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    _id: "route3",
    routeNumber: "RT003",
    stops: ["stop2", "stop3", "stop5"], // References to stop _ids
    buses: ["bus2", "bus4"], // References to bus _ids
    totalJourneyTime: "1.75 hours",
    operatingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

// Static Student Data
const staticStudents = [
  {
    _id: "student1",
    studentId: "STU001",
    studentName: "Rahul Sharma",
    busNumber: "BUS001",
    stopId: "ST001",
    className: "10th Grade",
    rollNumber: "101",
  },
  {
    _id: "student2",
    studentId: "STU002",
    studentName: "Priya Patel",
    busNumber: "BUS001",
    stopId: "ST001",
    className: "9th Grade",
    rollNumber: "102",
  },
  {
    _id: "student3",
    studentId: "STU003",
    studentName: "Amit Kumar",
    busNumber: "BUS001",
    stopId: "ST002",
    className: "11th Grade",
    rollNumber: "103",
  },
  {
    _id: "student4",
    studentId: "STU004",
    studentName: "Sneha Singh",
    busNumber: "BUS001",
    stopId: "ST002",
    className: "10th Grade",
    rollNumber: "104",
  },
  {
    _id: "student5",
    studentId: "STU005",
    studentName: "Vikram Mehta",
    busNumber: "BUS001",
    stopId: "ST003",
    className: "12th Grade",
    rollNumber: "105",
  },
  {
    _id: "student6",
    studentId: "STU006",
    studentName: "Anjali Desai",
    busNumber: "BUS002",
    stopId: "ST001",
    className: "9th Grade",
    rollNumber: "201",
  },
  {
    _id: "student7",
    studentId: "STU007",
    studentName: "Rajesh Verma",
    busNumber: "BUS002",
    stopId: "ST002",
    className: "10th Grade",
    rollNumber: "202",
  },
  {
    _id: "student8",
    studentId: "STU008",
    studentName: "Kavita Reddy",
    busNumber: "BUS002",
    stopId: "ST003",
    className: "11th Grade",
    rollNumber: "203",
  },
];

// In-memory attendance storage (date -> busNumber -> studentId -> attendance)
let attendanceData = {};

// Helper function to find stop by stopId
const findStopByStopId = (stopId) => {
  return staticStops.find((stop) => stop.stopId === stopId);
};

// Helper function to find bus by busNumber
const findBusByBusNumber = (busNumber) => {
  return staticBuses.find((bus) => bus.busNumber === busNumber);
};

// Helper function to populate stops in routes
const populateStops = (stopIds) => {
  return stopIds
    .map((stopId) => staticStops.find((stop) => stop._id === stopId))
    .filter(Boolean);
};

// Helper function to populate buses in routes
const populateBuses = (busIds) => {
  return busIds
    .map((busId) => staticBuses.find((bus) => bus._id === busId))
    .filter(Boolean);
};

module.exports = {
  staticAdmins,
  staticUsers,
  staticStops,
  staticBuses,
  staticDrivers,
  staticRoutes,
  staticStudents,
  attendanceData,
  findStopByStopId,
  findBusByBusNumber,
  populateStops,
  populateBuses,
};
