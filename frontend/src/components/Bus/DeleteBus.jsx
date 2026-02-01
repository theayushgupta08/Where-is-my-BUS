import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const DeleteBus = () => {
    const [busNumber, setBusNumber] = useState('');
    const [busDetails, setBusDetails] = useState(null);
    const [confirmDelete, setConfirmDelete] = useState(false);

    const handleFetchBusDetails = async () => {
        try {
            const response = await axiosInstance.get(`/buses/${busNumber}`);
            setBusDetails(response.data.data);
            setConfirmDelete(true);
        } catch (error) {
            console.error('Error fetching bus details:', error);
            alert('Bus not found');
        }
    };

    const handleDeleteBus = async () => {
        try {
            await axiosInstance.delete(`/buses/${busNumber}`);
            alert('Bus deleted successfully');
            setBusNumber('');
            setBusDetails(null);
            setConfirmDelete(false);
        } catch (error) {
            console.error('Error deleting bus:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-[70%] wave-group container" style={{
                maxWidth: '90%', // Allow the container to shrink or grow dynamically
                width: 'auto', // Adjust width based on content
                minWidth: '300px', // Ensure a minimum width for smaller content
            }}>
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Delete Bus</h1>
                <input
                    type="text"
                    value={busNumber}
                    onChange={(e) => setBusNumber(e.target.value)}
                    placeholder="Bus Number"
                    className="input"
                />
                <button onClick={handleFetchBusDetails} className="m-3 p-2 bg-blue-500 text-white">Fetch Bus Details</button>

                {busDetails && (
                    <div className="mt-4">
                        <h2 className="text-2xl font-bold mb-4">Bus Details</h2>
                        <p><strong>Bus Name:</strong> {busDetails.busName}</p>
                        <p><strong>Bus Number:</strong> {busDetails.busNumber}</p>
                        <p><strong>Registration Number:</strong> {busDetails.registrationNumber}</p>
                        <p><strong>Source Stop:</strong> {busDetails.sourceStop}</p>
                        <p><strong>Destination Stop:</strong> {busDetails.destinationStop}</p>
                        <p><strong>Source Time:</strong> {busDetails.sourceTime}</p>
                        <p><strong>Destination Time:</strong> {busDetails.destinationTime}</p>

                        {confirmDelete && (
                            <div className="mt-4">
                                <p>Are you sure you want to delete this bus?</p>
                                <button onClick={handleDeleteBus} className="m-3 p-2 bg-red-500 text-white">Confirm Delete</button>
                                <button onClick={() => setConfirmDelete(false)} className="m-3 p-2 bg-gray-500 text-white">Cancel</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteBus;