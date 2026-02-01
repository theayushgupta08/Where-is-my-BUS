import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const DeleteStops = () => {
    const [stopId, setstopId] = useState('');
    const [stopsDetails, setstopsDetails] = useState(null);
    const [confirmDelete, setconfirmDelete] = useState(false);

    const handleFetchStopsDetails = async () => {
        try {
            const response = await axiosInstance.get(`/stops/${stopId}`);
            setstopsDetails(response.data);
            setconfirmDelete(true);
        } catch (error) {
            console.error('Error fetching stops details:', error);
            alert('Stops not found');
        }
    };

    const handleDeleteStops = async () => {
        try {
            // Send stopId in the request body
            await axiosInstance.delete(`/stops/${stopId}`);
            alert('Stops deleted successfully');
            setstopId('');
            setstopsDetails(null);
            setconfirmDelete(false);
        } catch (error) {
            console.error('Error deleting stops:', error);
            alert('Error deleting stops');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen m-14">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-auto wave-group container" style={{
                maxWidth: '90%', // Allow the container to shrink or grow dynamically
                width: 'auto', // Adjust width based on content
                minWidth: '300px', // Ensure a minimum width for smaller content
            }}>
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Delete Stops</h1>
                <input
                    type="text"
                    value={stopId}
                    onChange={(e) => setstopId(e.target.value)}
                    placeholder="Stop ID"
                    className="input"
                />
                <button onClick={handleFetchStopsDetails} className="m-3 p-2 bg-blue-500 text-white">Fetch Stops Details</button>

                {stopsDetails && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold mb-4">Stops Details</h2>
                        <p><strong>Stop ID:</strong> {stopsDetails.stopId}</p>
                        <p><strong>Stop Name:</strong> {stopsDetails.stopName}</p>
                        <p><strong>Latitude:</strong> {stopsDetails.latitude}</p>
                        <p><strong>Longitude:</strong> {stopsDetails.longitude}</p>

                        {confirmDelete && (
                            <div className="mt-4">
                                <p>Are you sure you want to delete this stop?</p>
                                <button onClick={handleDeleteStops} className="m-3 p-2 bg-red-500 text-white">Confirm Delete</button>
                                <button onClick={() => setconfirmDelete(false)} className="m-3 p-2 bg-gray-500 text-white">Cancel</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteStops;