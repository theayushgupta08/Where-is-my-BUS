import React, { useState } from 'react';
import axios from 'axios';

const UpdateRoute = () => {
    const [routeNumber, setRouteNumber] = useState('');
    const [updatedRoute, setUpdatedRoute] = useState({
        routeStops: [],
        totalJourneyTime: '',
        operatingDays: [],
        firstService: '',
        lastService: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedRoute({ ...updatedRoute, [name]: value });
    };

    const handleUpdateRoute = async () => {
        try {
            await axios.put(`/api/routes/${routeNumber}`, updatedRoute);
            alert('Route updated successfully');
            setUpdatedRoute({
                routeStops: [],
                totalJourneyTime: '',
                operatingDays: [],
                firstService: '',
                lastService: ''
            });
        } catch (error) {
            console.error('Error updating route:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-[70%] wave-group container">
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Update Route</h1>
                <input
                    type="text"
                    value={routeNumber}
                    onChange={(e) => setRouteNumber(e.target.value)}
                    placeholder="Route Number"
                    className="input"
                />
                <input
                    type="text"
                    name="totalJourneyTime"
                    value={updatedRoute.totalJourneyTime}
                    onChange={handleInputChange}
                    placeholder="Total Journey Time"
                    className="input"
                />
                <input
                    type="text"
                    name="firstService"
                    value={updatedRoute.firstService}
                    onChange={handleInputChange}
                    placeholder="First Service"
                    className="input"
                />
                <input
                    type="text"
                    name="lastService"
                    value={updatedRoute.lastService}
                    onChange={handleInputChange}
                    placeholder="Last Service"
                    className="input"
                />
                <button onClick={handleUpdateRoute} className="m-3 p-2 bg-blue-500 text-white">Update Route</button>
            </div>
        </div>
    );
};

export default UpdateRoute;