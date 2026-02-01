// routeController.js
// const Route = require("../models/busRoute"); // Commented out - using static data
// const Stop = require("../models/stop"); // Commented out - using static data
// const Bus = require("../models/bus"); // Commented out - using static data
const { staticRoutes, staticStops, staticBuses, findStopByStopId, findBusByBusNumber, populateStops, populateBuses } = require("../data/staticData");

// In-memory storage for routes (simulating database)
let routes = [...staticRoutes];
// Add Route
const addRoute = async (req, res) => {
    const { routeNumber, stops: stopIds, buses: busNumbers, totalJourneyTime, operatingDays } = req.body;

    try {
        // Check if the route already exists
        const existingRoute = routes.find(r => r.routeNumber === routeNumber);
        if (existingRoute) {
            return res.status(200).json({ message: "Route already exists" });
        }

        // Check if all stops exist
        const existingStops = stopIds
            .map(stopId => staticStops.find(s => s.stopId === stopId))
            .filter(Boolean);
        const existingStopRefs = existingStops.map(stop => stop._id);

        // If any stop is not found, return an error
        const missingStops = stopIds.filter(
            (stopId) => !staticStops.some((stop) => stop.stopId === stopId)
        );
        if (missingStops.length > 0) {
            return res
                .status(400)
                .json({ message: "Stops do not exist", missingStops });
        }

        // Check if all buses exist
        const existingBuses = busNumbers
            .map(busNumber => staticBuses.find(b => b.busNumber === busNumber))
            .filter(Boolean);
        const existingBusRefs = existingBuses.map(bus => bus._id);

        // If any bus is not found, return an error
        const missingBuses = busNumbers.filter(
            (busNumber) => !staticBuses.some((bus) => bus.busNumber === busNumber)
        );

        if (missingBuses.length > 0) {
            return res
                .status(400)
                .json({ message: "Buses do not exist", missingBuses });
        }

        // Create new route
        const newRoute = {
            _id: `route${Date.now()}`,
            routeNumber,
            stops: existingStopRefs,
            buses: existingBusRefs,
            totalJourneyTime,
            operatingDays,
            isActive: true,
            createdAt: new Date(),
            updatedAt: new Date(),
        };

        routes.push(newRoute);
        res
            .status(201)
            .json({ message: "Route added successfully", route: newRoute });
    } catch (error) {
        console.error("Error adding route:", error);
        res
            .status(500)
            .json({ message: "Error adding route", error: error.message });
    }
};


// Get Route by Number

const getRouteByNumber = async (req, res) => {
    try {
        const { routeNumber } = req.params;

        // Find the route by routeNumber
        const route = routes.find(r => r.routeNumber === routeNumber);

        if (!route) {
            return res.status(404).json({ message: "Route not found" });
        }

        // Populate stops and buses
        const populatedRoute = {
            ...route,
            stops: populateStops(route.stops),
            buses: populateBuses(route.buses),
        };

        res.status(200).json(populatedRoute);
    } catch (error) {
        console.error("Error fetching route:", error);
        res.status(500).json({ message: "Error fetching route", error: error.message });
    }
};

// Show Routes
const showAllRoutes = async (req, res) => {
    try {
        // Populate stops and buses for all routes
        const populatedRoutes = routes.map(route => ({
            ...route,
            stops: populateStops(route.stops),
            buses: populateBuses(route.buses),
        }));

        res.status(200).json({ routes: populatedRoutes });
    } catch (error) {
        console.error("Error retrieving routes:", error);
        res.status(500).json({
            message: "Error retrieving routes",
            error: error.message,
        });
    }
};

// Delete Route
const deleteRoute = async (req, res) => {
    const { routeNumber } = req.params;

    try {
        const routeIndex = routes.findIndex(r => r.routeNumber === routeNumber);
        if (routeIndex === -1) {
            return res.status(404).json({ message: "Route not found" });
        }

        const deletedRoute = routes.splice(routeIndex, 1)[0];

        res
            .status(200)
            .json({ message: "Route deleted successfully", route: deletedRoute });
    } catch (error) {
        console.error("Error deleting route:", error);
        res
            .status(500)
            .json({ message: "Error deleting route", error: error.message });
    }
};

// const mongoose = require("mongoose"); // Commented out - not needed with static data

const showDesiredRoutes = async (req, res) => {
    try {
        const { startStopId, destinationStopId } = req.body;

        // Find stops by stopId
        const startStop = staticStops.find(s => s.stopId === startStopId);
        const destStop = staticStops.find(s => s.stopId === destinationStopId);

        if (!startStop || !destStop) {
            return res.status(404).json({ message: "One or both stops not found" });
        }

        // Find all routes that contain both start and destination stops
        const matchingRoutes = routes.filter((route) => {
            const stopRefs = route.stops;
            const startRef = startStop._id;
            const destRef = destStop._id;
            return stopRefs.includes(startRef) && stopRefs.includes(destRef);
        });

        if (!matchingRoutes.length) {
            return res
                .status(404)
                .json({ message: "No routes found with these stops" });
        }

        // Populate and filter routes where startStopId appears before destinationStopId
        const validRoutes = matchingRoutes
            .map(route => ({
                ...route,
                stops: populateStops(route.stops),
                buses: populateBuses(route.buses),
            }))
            .filter((route) => {
                const stopIndexMap = route.stops.map((stop) => stop._id);
                const startIndex = stopIndexMap.indexOf(startStop._id);
                const destIndex = stopIndexMap.indexOf(destStop._id);
                return startIndex !== -1 && destIndex !== -1 && startIndex < destIndex;
            });

        if (!validRoutes.length) {
            return res
                .status(400)
                .json({
                    message: "Invalid route: Start stop appears after destination stop",
                });
        }

        // Extract only the buses from the valid routes
        const buses = validRoutes.flatMap((route) => route.buses);

        res.status(200).json({ buses });
    } catch (error) {
        console.error("Error retrieving buses:", error);
        res.status(500).json({
            message: "Error retrieving buses",
            error: error.message,
        });
    }
};
module.exports = {
    addRoute,
    showAllRoutes,
    deleteRoute,
    showDesiredRoutes,
    getRouteByNumber,
};