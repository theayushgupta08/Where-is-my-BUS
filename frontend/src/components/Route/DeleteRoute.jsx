import React, { useState } from 'react';
import axios from 'axios';

const DeleteRoute = () => {

    const [routeNumber, setrouteNumber] = useState('');
    const [routeDetails, setrouteDetails] = useState(null);
    const [confirmDelete, setconfirmDelete] = useState(false);


    const handleFetchRouteDetails = async () => {
        try {
            const response = await axios.get(`/api/routes/${routeNumber}`);
            setrouteDetails(response.data);
            setconfirmDelete(true);
        } catch (error) {
            console.error('Error fetching route details:', error);
            alert('Route not found');
        }

    };

    const handleDeleteRoute = async () => {
        try {
            await axios.delete(`/api/routes/${routeNumber}`);
            alert('Route deleted successfully');
            setrouteNumber('');
            setrouteDetails(null);
            setconfirmDelete(false);
        } catch (error) {
            console.error('Error deleting route:', error);
        }
    };



    return (
        <div className="flex justify-center items-center min-h-screen m-14">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-auto wave-group container" style={{
                maxWidth: '90%', // Allow the container to shrink or grow dynamically
                width: 'auto', // Adjust width based on content
                minWidth: '300px', // Ensure a minimum width for smaller content
            }}>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Delete Route</h1>
                <input
                    type="text"
                    value={routeNumber}
                    onChange={(e) => setrouteNumber(e.target.value)}
                    placeholder="User ID"
                    className="input"
                />
                <button onClick={handleFetchRouteDetails} className="m-3 p-2 bg-blue-500 text-white">Fetch Route Details</button>

                {routeDetails && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold mb-4">Route Details</h2>
                        <p><strong>Route Number:</strong> {routeDetails.routeNumber}</p>
                        <p><strong>Stops:</strong> {routeDetails.stops}</p>
                        <p><strong>Busses:</strong> {routeDetails.buses}</p>
                        <p><strong>Total Journey Time:</strong> {routeDetails.totalJourneyTime}</p>
                        <p><strong>Operating Days:</strong> {routeDetails.operatingDays}</p>
                        <p><strong>Active:</strong> {routeDetails.isActive}</p>

                        {confirmDelete && (
                            <div className="mt-4">
                                <p>Are you sure you want to delete this route?</p>
                                <button onClick={handleDeleteRoute} className="m-3 p-2 bg-red-500 text-white">Confirm Delete</button>
                                <button onClick={() => setconfirmDelete(false)} className="m-3 p-2 bg-gray-500 text-white">Cancel</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteRoute;