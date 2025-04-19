
const express = require("express");
const router = express.Router();


const { adminAuth } = require("../controllers/admincontroller");
const busTransportController = require("../controllers/driverController");
const busController = require("../controllers/busController");
const routeController = require("../controllers/routeController");
const stopController = require("../controllers/stopController");

// admin login 
router.post("/admin", adminAuth);


// Drivers
router.post("/drivers", busTransportController.addDriver);
router.get("/drivers/:userId", busTransportController.getDriverByUserId);
// router.put("/drivers/:userId", busTransportController.updateDriver);
router.delete("/drivers/:userId", busTransportController.deleteDriver);
router.get("/drivers", busTransportController.viewAllDrivers);


// Stops
router.post("/stops", stopController.addStop);
router.delete("/stops/:stopId", stopController.deleteStop);
router.get("/stops", stopController.showStops);
router.get("/stops/:stopId", stopController.getStopById);
router.post('/stops/validate', stopController.validateStops);

// Bus
router.get('/buses', busController.viewAllBuses);
router.post('/buses', busController.addBus);
// router.put('/buses/:busNumber', busController.updateBus);
router.delete('/buses/:busNumber', busController.deleteBus);
router.get('/buses/:busNumber', busController.getBusByNumber);
router.post('/buses/validate', busController.validateBuses);

// Routes
router.post("/routes", routeController.addRoute);
router.get("/routes", routeController.showAllRoutes);
router.get("/routes/desired", routeController.showDesiredRoutes);
// router.put("/routes/:routeNumber", routeController.updateRoute);
router.delete("/routes/:routeNumber", routeController.deleteRoute);
router.get('/routes/:routeNumber', routeController.getRouteByNumber);


module.exports = router;
