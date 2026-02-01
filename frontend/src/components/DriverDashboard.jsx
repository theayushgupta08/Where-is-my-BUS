import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styles } from '../styles';
import { BusCanvas } from './canvas';
import Chatbot from './Chatbot';

const DriverDashboard = ({ username }) => {
    const navigate = useNavigate();
    const [selectedCard, setSelectedCard] = useState(null);

    // Dummy data for driver
    const driverData = {
        busAssignment: {
            busNumber: "BUS001",
            busName: "Express Line 1",
            registrationNumber: "DL-01-AB-1234",
            route: "Route RT001",
            sourceStop: "Central Station",
            destinationStop: "University Campus",
            conductorName: "Priya Sharma",
            conductorContact: "9876543211"
        },
        schedule: {
            morning: {
                departure: "07:00 AM",
                arrival: "08:30 AM",
                route: "Central Station → University Campus",
                stops: ["Central Station", "City Mall", "University Campus"]
            },
            afternoon: {
                departure: "03:00 PM",
                arrival: "04:30 PM",
                route: "University Campus → Central Station",
                stops: ["University Campus", "City Mall", "Central Station"]
            },
            workingDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
        },
        updates: [
            {
                id: 1,
                title: "Route Change Notice",
                message: "Route RT001 will have a temporary detour on Main Street due to road construction from Dec 15-20.",
                date: "2024-12-10",
                priority: "high"
            },
            {
                id: 2,
                title: "Schedule Update",
                message: "Morning departure time adjusted to 7:00 AM starting next week.",
                date: "2024-12-08",
                priority: "medium"
            },
            {
                id: 3,
                title: "Maintenance Reminder",
                message: "Bus BUS001 scheduled for routine maintenance on Dec 25. Alternate bus will be assigned.",
                date: "2024-12-05",
                priority: "low"
            },
            {
                id: 4,
                title: "Holiday Schedule",
                message: "No service on Dec 25 and Jan 1. Regular schedule resumes on Dec 26 and Jan 2.",
                date: "2024-12-01",
                priority: "medium"
            }
        ]
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
                        <p className={`${styles.heroHeadText} mt-1 text-orange-400 text-center md:text-left`}>Driver <span className='text-orange-600'>{username}</span>!</p>
                    </div>
                </div>
                <div className='flex-grow mt-20 md:mt-0 h-full'>
                    <BusCanvas />
                </div>
            </div>
            <div className='flex flex-col w-full md:w-1/2 mt-20 md:mt-0 md:ml-16 px-4 md:px-0 md:items-center justify-center'>
                <div className='bg-tertiary p-8 rounded-2xl max-w-md w-full'>
                    <h2 className='text-white text-2xl font-bold mb-4'>Driver Dashboard</h2>
                    <div className='space-y-4 text-white'>
                        <div 
                            className='p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-between'
                            onClick={() => navigate('/driver/attendance')}
                        >
                            <div>
                                <h3 className='font-semibold mb-2 cursor-pointer' onClick={() => navigate('/driver/attendance')}>📋 Take Attendance</h3>
                                <p className='text-gray-300 cursor-pointer' onClick={() => navigate('/driver/attendance')}>Mark student attendance for Morning and Afternoon</p>
                            </div>
                            <span className='text-orange-500 text-2xl ml-4'>→</span>
                        </div>
                        <div 
                            className='p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-between'
                            onClick={() => handleCardClick('busAssignment')}
                        >
                            <div>
                                <h3 className='font-semibold mb-2'>🚌 Your Bus Assignment</h3>
                                <p className='text-gray-300'>View your assigned bus and route information</p>
                            </div>
                            <span className='text-orange-500 text-2xl ml-4'>→</span>
                        </div>
                        <div 
                            className='p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-between'
                            onClick={() => handleCardClick('schedule')}
                        >
                            <div>
                                <h3 className='font-semibold mb-2'>📅 Schedule</h3>
                                <p className='text-gray-300'>Check your daily schedule and timings</p>
                            </div>
                            <span className='text-orange-500 text-2xl ml-4'>→</span>
                        </div>
                        <div 
                            className='p-4 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors flex items-center justify-between'
                            onClick={() => handleCardClick('updates')}
                        >
                            <div>
                                <h3 className='font-semibold mb-2'>📢 Updates</h3>
                                <p className='text-gray-300'>Receive important updates and notifications</p>
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
                                {selectedCard === 'busAssignment' && '🚌 Bus Assignment'}
                                {selectedCard === 'schedule' && '📅 Schedule'}
                                {selectedCard === 'updates' && '📢 Updates'}
                            </h2>
                            <button
                                onClick={closeModal}
                                className="text-gray-400 hover:text-white text-2xl font-bold transition-colors"
                            >
                                ×
                            </button>
                        </div>

                        {/* Bus Assignment Content */}
                        {selectedCard === 'busAssignment' && (
                            <div className="space-y-4 text-white">
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-2">Bus Details</h3>
                                    <div className="space-y-2 text-gray-300">
                                        <p><span className="font-medium">Bus Number:</span> {driverData.busAssignment.busNumber}</p>
                                        <p><span className="font-medium">Bus Name:</span> {driverData.busAssignment.busName}</p>
                                        <p><span className="font-medium">Registration:</span> {driverData.busAssignment.registrationNumber}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-2">Route Information</h3>
                                    <div className="space-y-2 text-gray-300">
                                        <p><span className="font-medium">Route:</span> {driverData.busAssignment.route}</p>
                                        <p><span className="font-medium">Source:</span> {driverData.busAssignment.sourceStop}</p>
                                        <p><span className="font-medium">Destination:</span> {driverData.busAssignment.destinationStop}</p>
                                    </div>
                                </div>
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-2">Conductor Details</h3>
                                    <div className="space-y-2 text-gray-300">
                                        <p><span className="font-medium">Name:</span> {driverData.busAssignment.conductorName}</p>
                                        <p><span className="font-medium">Contact:</span> {driverData.busAssignment.conductorContact}</p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Schedule Content */}
                        {selectedCard === 'schedule' && (
                            <div className="space-y-4 text-white">
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-3">🌅 Morning Schedule</h3>
                                    <div className="space-y-2 text-gray-300">
                                        <p><span className="font-medium">Departure:</span> {driverData.schedule.morning.departure}</p>
                                        <p><span className="font-medium">Arrival:</span> {driverData.schedule.morning.arrival}</p>
                                        <p><span className="font-medium">Route:</span> {driverData.schedule.morning.route}</p>
                                        <div className="mt-2">
                                            <p className="font-medium mb-1">Stops:</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                {driverData.schedule.morning.stops.map((stop, idx) => (
                                                    <li key={idx}>{stop}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-3">🌆 Afternoon Schedule</h3>
                                    <div className="space-y-2 text-gray-300">
                                        <p><span className="font-medium">Departure:</span> {driverData.schedule.afternoon.departure}</p>
                                        <p><span className="font-medium">Arrival:</span> {driverData.schedule.afternoon.arrival}</p>
                                        <p><span className="font-medium">Route:</span> {driverData.schedule.afternoon.route}</p>
                                        <div className="mt-2">
                                            <p className="font-medium mb-1">Stops:</p>
                                            <ul className="list-disc list-inside space-y-1">
                                                {driverData.schedule.afternoon.stops.map((stop, idx) => (
                                                    <li key={idx}>{stop}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-700/50 rounded-lg p-4">
                                    <h3 className="text-orange-400 font-semibold mb-2">Working Days</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {driverData.schedule.workingDays.map((day, idx) => (
                                            <span key={idx} className="px-3 py-1 bg-orange-500/20 border border-orange-500/30 rounded-lg text-sm">
                                                {day}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Updates Content */}
                        {selectedCard === 'updates' && (
                            <div className="space-y-4 text-white">
                                {driverData.updates.map((update) => (
                                    <div key={update.id} className="bg-gray-700/50 rounded-lg p-4 border-l-4 border-orange-500">
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-orange-400 font-semibold text-lg">{update.title}</h3>
                                            <span className={`px-2 py-1 rounded text-xs font-medium ${
                                                update.priority === 'high' ? 'bg-red-500/20 text-red-300' :
                                                update.priority === 'medium' ? 'bg-yellow-500/20 text-yellow-300' :
                                                'bg-blue-500/20 text-blue-300'
                                            }`}>
                                                {update.priority.toUpperCase()}
                                            </span>
                                        </div>
                                        <p className="text-gray-300 mb-2">{update.message}</p>
                                        <p className="text-gray-400 text-sm">Date: {update.date}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}
        </section>
    );
};

export default DriverDashboard;
