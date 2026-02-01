import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const AddRoute = () => {
    const [newRoute, setNewRoute] = useState({
        routeNumber: '',
        stops: [], // Array of stop IDs
        buses: [], // Array of bus numbers
        totalJourneyTime: '',
        operatingDays: [], // Optional if backend doesn't require it
        isActive: true,
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewRoute({ ...newRoute, [name]: value });
    };

    const handleStopsChange = (e) => {
        const { value } = e.target;
        setNewRoute({ ...newRoute, stops: value.split(',').map(stop => stop.trim()) });
    };

    const handleBusesChange = (e) => {
        const { value } = e.target;
        setNewRoute({ ...newRoute, buses: value.split(',').map(bus => bus.trim()) });
    };

    const handleOperatingDaysChange = (e) => {
        const { value, checked } = e.target;
        if (checked) {
            setNewRoute({ ...newRoute, operatingDays: [...newRoute.operatingDays, value] });
        } else {
            setNewRoute({ ...newRoute, operatingDays: newRoute.operatingDays.filter(day => day !== value) });
        }
    };

    const handleIsActiveChange = (e) => {
        const { value } = e.target;
        setNewRoute({ ...newRoute, isActive: value === 'Yes' });
    };

    const validateStopsAndBuses = async () => {
        try {
            // Validate stops
            const stopsResponse = await axiosInstance.post('/stops/validate', { stops: newRoute.stops });
            const { missingStops } = stopsResponse.data;
            if (missingStops && missingStops.length > 0) {
                alert(`The following stop IDs are not present in the database: ${missingStops.join(', ')}`);
                return false;
            }

            // Validate buses
            const busesResponse = await axiosInstance.post('/buses/validate', { buses: newRoute.buses });
            const { missingBuses } = busesResponse.data;
            if (missingBuses && missingBuses.length > 0) {
                alert(`The following bus numbers are not present in the database: ${missingBuses.join(', ')}`);
                return false;
            }

            return true;
        } catch (error) {
            console.error('Error validating stops or buses:', error);
            alert('Error validating stops or buses. Please try again.');
            return false;
        }
    };

    const handleAddRoute = async () => {
        try {
            // Validate stops and buses before proceeding
            const isValid = await validateStopsAndBuses();
            if (!isValid) return;

            console.log('Adding route:', newRoute);
            const response = await axiosInstance.post('/routes', newRoute);
            console.log('Received route:', response.data);

            if (response.status === 201) {
                alert(response.data.message); // Use the message from the response
                setNewRoute({
                    routeNumber: '',
                    stops: [],
                    buses: [],
                    totalJourneyTime: '',
                    operatingDays: [],
                    isActive: true,
                });
            } else {
                alert('Failed to add route');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message); // Use the message from the error response
            } else {
                alert('Error adding route');
            }
            console.error('Error adding route:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-[70%] wave-group container">
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Add Route</h1>
                <input
                    type="text"
                    name="routeNumber"
                    value={newRoute.routeNumber}
                    onChange={handleInputChange}
                    placeholder="Route Number"
                    className="input"
                />
                <input
                    type="text"
                    name="stops"
                    value={newRoute.stops.join(', ')}
                    onChange={handleStopsChange}
                    placeholder="Stops (comma-separated stop IDs)"
                    className="input"
                />
                <input
                    type="text"
                    name="buses"
                    value={newRoute.buses.join(', ')}
                    onChange={handleBusesChange}
                    placeholder="Buses (comma-separated bus numbers)"
                    className="input"
                />
                <input
                    type="text"
                    name="totalJourneyTime"
                    value={newRoute.totalJourneyTime}
                    onChange={handleInputChange}
                    placeholder="Total Journey Time (HH:mm)"
                    className="input"
                />
                <div className="mb-2 flex flex-col">
                    <label className="block mb-1">Operating Days:</label>
                    {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map(day => (
                        <label key={day} className="mr-2">
                            <input
                                type="checkbox"
                                value={day}
                                checked={newRoute.operatingDays.includes(day)}
                                onChange={handleOperatingDaysChange}
                                className="mr-1"
                            />
                            {day}
                        </label>
                    ))}
                </div>
                <div className="mb-2">
                    <label className="block mb-1">Is Active:</label>
                    <label className="mr-2">
                        <input
                            type="radio"
                            name="isActive"
                            value="Yes"
                            checked={newRoute.isActive === true}
                            onChange={handleIsActiveChange}
                            className="mr-1"
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="isActive"
                            value="No"
                            checked={newRoute.isActive === false}
                            onChange={handleIsActiveChange}
                            className="mr-1"
                        />
                        No
                    </label>
                </div>
                <button onClick={handleAddRoute} className="m-3 p-2 bg-blue-500 text-white">Add Route</button>
            </div>
        </div>
    );
};

export default AddRoute;