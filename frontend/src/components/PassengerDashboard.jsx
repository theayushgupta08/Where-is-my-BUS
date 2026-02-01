import React, { useState } from 'react';
import { styles } from '../styles';
import { BusCanvas } from './canvas';
import Chatbot from './Chatbot';

const PassengerDashboard = ({ username }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    // Dummy data for passenger
    const passengerData = {
        trackBus: {
            currentBus: {
                busNumber: "BUS001",
                busName: "Express Line 1",
                currentLocation: "Near City Mall",
                nextStop: "University Campus",
                estimatedArrival: "8 minutes",
                status: "On Time",
                speed: "45 km/h",
                distance: "2.3 km away"
            },
            nearbyBuses: [
                {
                    busNumber: "BUS002",
                    busName: "Express Line 2",
                    distance: "0.5 km",
                    nextStop: "City Mall"
                },
                {
                    busNumber: "BUS003",
                    busName: "City Connector",
                    distance: "1.2 km",
                    nextStop: "Central Station"
                }
            ]
        },
        routesAndStops: {
            availableRoutes: [
                {
                    routeNumber: "RT001",
                    routeName: "Central to University",
                    stops: ["Central Station", "City Mall", "University Campus"],
                    distance: "15 km",
                    duration: "45 minutes"
                },
                {
                    routeNumber: "RT002",
                    routeName: "Central to Airport",
                    stops: ["Central Station", "Airport Terminal", "Railway Station"],
                    distance: "25 km",
                    duration: "60 minutes"
                },
                {
                    routeNumber: "RT003",
                    routeName: "University to Hospital",
                    stops: ["University Campus", "City Mall", "Hospital Square"],
                    distance: "12 km",
                    duration: "35 minutes"
                }
            ],
            allStops: [
                { id: "ST001", name: "Central Station", latitude: "28.7041", longitude: "77.1025" },
                { id: "ST002", name: "University Campus", latitude: "28.6139", longitude: "77.2090" },
                { id: "ST003", name: "City Mall", latitude: "28.5355", longitude: "77.3910" },
                { id: "ST004", name: "Airport Terminal", latitude: "28.5562", longitude: "77.1000" },
                { id: "ST005", name: "Hospital Square", latitude: "28.7041", longitude: "77.1025" },
                { id: "ST006", name: "Railway Station", latitude: "28.6619", longitude: "77.2274" }
            ]
        },
        schedule: {
            routes: [
                {
                    routeNumber: "RT001",
                    routeName: "Central to University",
                    timings: [
                        { time: "07:00 AM", frequency: "Every 30 minutes" },
                        { time: "08:00 AM", frequency: "Every 30 minutes" },
                        { time: "09:00 AM", frequency: "Every 30 minutes" },
                        { time: "03:00 PM", frequency: "Every 30 minutes" },
                        { time: "04:00 PM", frequency: "Every 30 minutes" },
                        { time: "05:00 PM", frequency: "Every 30 minutes" }
                    ]
                },
                {
                    routeNumber: "RT002",
                    routeName: "Central to Airport",
                    timings: [
                        { time: "06:00 AM", frequency: "Every 45 minutes" },
                        { time: "10:00 AM", frequency: "Every 45 minutes" },
                        { time: "02:00 PM", frequency: "Every 45 minutes" },
                        { time: "06:00 PM", frequency: "Every 45 minutes" }
                    ]
                },
                {
                    routeNumber: "RT003",
                    routeName: "University to Hospital",
                    timings: [
                        { time: "08:30 AM", frequency: "Every 20 minutes" },
                        { time: "12:00 PM", frequency: "Every 20 minutes" },
                        { time: "04:30 PM", frequency: "Every 20 minutes" }
                    ]
                }
            ],
            operatingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        }
    };

    const handleCardClick = (cardType) => {
        setSelectedCard(cardType);
    };

    const closeModal = () => {
        setSelectedCard(null);
    };

    return (
        <section className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative w-full h-screen mx-auto flex flex-col md:flex-row pt-20' style={{ backgroundColor: '#050816' }}>
            <div className='flex flex-col w-full md:w-1/2 h-full'>
                <div className='absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-col items-center md:items-start md:right-32 px-4 md:px-0'>
                    <div>
                        <h1 className={`${styles.heroSubText} text-orange-600 text-center md:text-left`}>Welcome</h1>
                        <p className={`${styles.heroHeadText} mt-1 text-orange-400 text-center md:text-left`}>Passenger <span className='text-orange-600'>{username}</span>!</p>
                    </div>
                </div>
                <div className='flex-grow mt-20 md:mt-0 h-full'>
                    <BusCanvas />
                </div>
            </div>
            <div className='flex flex-col w-full md:w-1/2 mt-20 md:mt-0 md:ml-16 px-4 md:px-0 md:items-center justify-center'>
                <div className='bg-tertiary p-8 rounded-2xl max-w-md w-full'>
                    <h2 className='text-white text-2xl font-bold mb-4'>Passenger Dashboard</h2>
                    <div className='space-y-4 text-white'>
                        <div 
                            className='p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-between'
                            onClick={() => handleCardClick('trackBus')}
                        >
                            <div>
                                <h3 className='font-semibold mb-2'>🚌 Track Bus</h3>
                                <p className='text-gray-300'>Track your bus in real-time</p>
                            </div>
                            <span className='text-orange-500 text-2xl ml-4'>→</span>
                        </div>
                        <div 
                            className='p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-between'
                            onClick={() => handleCardClick('routesAndStops')}
                        >
                            <div>
                                <h3 className='font-semibold mb-2'>🗺️ Routes & Stops</h3>
                                <p className='text-gray-300'>View available routes and bus stops</p>
                            </div>
                            <span className='text-orange-500 text-2xl ml-4'>→</span>
                        </div>
                        <div 
                            className='p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-between'
                            onClick={() => handleCardClick('schedule')}
                        >
                            <div>
                                <h3 className='font-semibold mb-2'>📅 Schedule</h3>
                                <p className='text-gray-300'>Check bus schedules and timings</p>
                            </div>
                            <span className='text-orange-500 text-2xl ml-4'>→</span>
                        </div>
                    </div>
                </div>
                <div className='mt-8'>
                    <Chatbot />
                </div>
            </div>

            {/* Modal for displaying card data */}
            {selectedCard && (
                <div 
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div 
                        className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-orange-500/30 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-bold text-white">
                                {selectedCard === 'trackBus' && '🚌 Track Bus'}
                                {selectedCard === 'routesAndStops' && '🗺️ Routes & Stops'}
                                {selectedCard === 'schedule' && '📅 Schedule'}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                            >
                                ×
                            </button>
                        </div>

                        {/* Track Bus Content */}
                        {selectedCard === 'trackBus' && (
                            <div className="space-y-4 text-white">
                                <div className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-green-500">
                                    <h3 className="text-green-400 font-semibold mb-3 text-lg">Current Bus</h3>
                                    <div className="space-y-2 text-gray-300">
                                        <p><span className="font-medium">Bus Number:</span> {passengerData.trackBus.currentBus.busNumber}</p>
                                        <p><span className="font-medium">Bus Name:</span> {passengerData.trackBus.currentBus.busName}</p>
                                        <p><span className="font-medium">Current Location:</span> {passengerData.trackBus.currentBus.currentLocation}</p>
                                        <p><span className="font-medium">Next Stop:</span> {passengerData.trackBus.currentBus.nextStop}</p>
                                        <p><span className="font-medium">Estimated Arrival:</span> <span className="text-green-400 font-semibold">{passengerData.trackBus.currentBus.estimatedArrival}</span></p>
                                        <p><span className="font-medium">Status:</span> <span className="text-green-400">{passengerData.trackBus.currentBus.status}</span></p>
                                        <p><span className="font-medium">Speed:</span> {passengerData.trackBus.currentBus.speed}</p>
                                        <p><span className="font-medium">Distance:</span> {passengerData.trackBus.currentBus.distance}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-3">Nearby Buses</h3>
                                    <div className="space-y-3">
                                        {passengerData.trackBus.nearbyBuses.map((bus, idx) => (
                                            <div key={idx} className="bg-gray-600/50 rounded-lg p-3">
                                                <p className="font-medium">{bus.busName} ({bus.busNumber})</p>
                                                <p className="text-sm text-gray-400">Distance: {bus.distance} | Next Stop: {bus.nextStop}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Routes & Stops Content */}
                        {selectedCard === 'routesAndStops' && (
                            <div className="space-y-4 text-white">
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-4 text-lg">Available Routes</h3>
                                    <div className="space-y-4">
                                        {passengerData.routesAndStops.availableRoutes.map((route, idx) => (
                                            <div key={idx} className="bg-gray-600/50 rounded-lg p-4 border-l-4 border-orange-500">
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-semibold text-lg">{route.routeName}</p>
                                                        <p className="text-sm text-gray-400">Route: {route.routeNumber}</p>
                                                    </div>
                                                    <div className="text-right text-sm">
                                                        <p className="text-gray-300">{route.distance}</p>
                                                        <p className="text-gray-400">{route.duration}</p>
                                                    </div>
                                                </div>
                                                <div className="mt-2">
                                                    <p className="text-sm font-medium text-gray-300 mb-1">Stops:</p>
                                                    <div className="flex flex-wrap gap-2">
                                                        {route.stops.map((stop, stopIdx) => (
                                                            <span key={stopIdx} className="px-2 py-1 bg-orange-500/20 border border-orange-500/30 rounded text-xs">
                                                                {stop}
                                                            </span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-4 text-lg">All Bus Stops</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {passengerData.routesAndStops.allStops.map((stop) => (
                                            <div key={stop.id} className="bg-gray-600/50 rounded-lg p-3">
                                                <p className="font-medium">{stop.name}</p>
                                                <p className="text-xs text-gray-400">ID: {stop.id}</p>
                                                <p className="text-xs text-gray-500">📍 {stop.latitude}, {stop.longitude}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Schedule Content */}
                        {selectedCard === 'schedule' && (
                            <div className="space-y-4 text-white">
                                {passengerData.schedule.routes.map((route, idx) => (
                                    <div key={idx} className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-orange-500">
                                        <h3 className="text-orange-400 font-semibold mb-3 text-lg">{route.routeName}</h3>
                                        <p className="text-sm text-gray-400 mb-3">Route: {route.routeNumber}</p>
                                        <div className="space-y-2">
                                            {route.timings.map((timing, timeIdx) => (
                                                <div key={timeIdx} className="bg-gray-600/50 rounded-lg p-3 flex justify-between items-center">
                                                    <span className="font-medium text-orange-300">{timing.time}</span>
                                                    <span className="text-sm text-gray-400">{timing.frequency}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-2">Operating Days</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {passengerData.schedule.operatingDays.map((day, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-sm">
                                                {day}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default PassengerDashboard;
