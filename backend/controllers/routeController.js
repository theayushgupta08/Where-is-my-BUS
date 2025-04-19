// routeController.js
const Route = require("../models/busRoute"); // Adjust the path as needed
const Stop = require("../models/stop"); // Adjust the path as needed
const Bus = require("../models/bus"); // Adjust the path as needed
// Add Route
const addRoute = async (req, res) => {
    const { routeNumber, stops, buses, totalJourneyTime, operatingDays } = req.body;

    try {
        // Check if the route already exists
        const existingRoute = await Route.findOne({ routeNumber });
        if (existingRoute) {
            return res.status(200).json({ message: "Route already exists" });
        }

        // Check if all stops exist in the database
        const existingStops = await Stop.find({ stopId: { $in: stops } }); // Get stops by stopId
        const existingStopIds = existingStops.map((stop) => stop._id); // Get Object IDs of existing stops

        // If any stop is not found, return an error
        const missingStops = stops.filter(
            (stop) =>
                !existingStops.some((existingStop) => existingStop.stopId === stop)
        );
        if (missingStops.length > 0) {
            return res
                .status(400)
                .json({ message: "Stops do not exist", missingStops });
        }

        // Check if all buses exist in the database
        const existingBuses = await Bus.find({ busNumber: { $in: buses } }); // Get buses by busNumber
        const existingBusIds = existingBuses.map((bus) => bus._id); // Get Object IDs of existing buses

        // If any bus is not found, return an error
        const missingBuses = buses.filter(
            (bus) =>
                !existingBuses.some((existingBus) => existingBus.busNumber === bus)
        );

        if (missingBuses.length > 0) {
            return res
                .status(400)
                .json({ message: "Buses do not exist", missingBuses });
        }

        // Create new route with existing stop IDs
        const newRoute = new Route({
            routeNumber,
            stops: existingStopIds, // Use Object IDs for stops
            buses: existingBusIds, // Use Object IDs for buses
            totalJourneyTime,
            operatingDays
        });

        // Save the route to the database
        await newRoute.save();
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

        // Find the stop by stopId
        const route = await Route.findOne({ routeNumber });

        if (!route) {
            return res.status(404).json({ message: "Route not found" });
        }

        res.status(200).json(route);
    } catch (error) {
        console.error("Error fetching route:", error);
        res.status(500).json({ message: "Error fetching route", error: error.message });
    }
};

// Show Routes
const showAllRoutes = async (req, res) => {
    try {
        // Get raw documents first to inspect them
        const rawRoutes = await Route.find().lean();
        console.log(
            "Raw routes before population:",
            JSON.stringify(rawRoutes, null, 2)
        );

        // Then try the population
        const routes = await Route.find().populate("buses").populate("stops");

        res.status(200).json({ routes });
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
        const deletedRoute = await Route.findOneAndDelete({ routeNumber });

        if (!deletedRoute) {
            return res.status(404).json({ message: "Route not found" });
        }

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

const mongoose = require("mongoose");

const showDesiredRoutes = async (req, res) => {
    try {
        const { startStopId, destinationStopId } = req.body;

        // Convert stop IDs to ObjectId
        const startId = new mongoose.Types.ObjectId(startStopId);
        const destinationId = new mongoose.Types.ObjectId(destinationStopId);

        // Find all routes that contain both start and destination stops
        const routes = await Route.find({
            stops: { $all: [startId, destinationId] },
        })
            .populate("stops")
            .populate("buses");

        if (!routes.length) {
            return res
                .status(404)
                .json({ message: "No routes found with these stops" });
        }

        // Filter routes where startStopId appears before destinationStopId
        const validRoutes = routes.filter((route) => {
            const stopIndexMap = route.stops.map((stop) => stop._id.toString());
            return (
                stopIndexMap.indexOf(startId.toString()) <
                stopIndexMap.indexOf(destinationId.toString())
            );
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