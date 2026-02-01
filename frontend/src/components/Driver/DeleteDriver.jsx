import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const DeleteDriver = () => {
    const [userId, setuserId] = useState('');
    const [driverDetails, setdriverDetails] = useState(null);
    const [confirmDelete, setconfirmDelete] = useState(false);

    const handleFetchDriverDetails = async () => {
        try {
            if (!userId.trim()) {
                alert('Please enter a valid User ID');
                return;
            }
            const response = await axiosInstance.get(`/drivers/${userId}`);
            setdriverDetails(response.data.data);
            setconfirmDelete(true);
        } catch (error) {
            console.error('Error fetching driver details:', error);
            alert('Driver not found');
        }
    };

    const handleDeleteDriver = async () => {
        try {
            if (!userId.trim()) {
                alert('Invalid User ID');
                return;
            }
            await axiosInstance.delete(`/drivers/${userId}`);
            alert('Driver deleted successfully');
            setuserId('');
            setdriverDetails(null);
            setconfirmDelete(false);
        } catch (error) {
            console.error('Error deleting driver:', error);
            alert('Failed to delete driver. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen m-14">
            <div className="p-6 flex flex-col justify-center items-center wave-group container bg-white shadow-lg rounded-lg"
                style={{
                    maxWidth: '90%', // Allow the container to shrink or grow dynamically
                    width: 'auto', // Adjust width based on content
                    minWidth: '300px', // Ensure a minimum width for smaller content
                }}
            >
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Delete Driver</h1>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setuserId(e.target.value)}
                    placeholder="User ID"
                    className="input border border-gray-300 rounded-md p-2 w-full"
                />
                <button onClick={handleFetchDriverDetails} className="m-3 p-2 bg-blue-500 text-white rounded-md">Fetch Driver Details</button>

                {driverDetails && (
                    <div className="mt-4 w-full">
                        <h2 className="text-2xl font-bold mb-4">Driver Details</h2>
                        <p><strong>User ID:</strong> {driverDetails.userId}</p>
                        <p><strong>Password:</strong> {driverDetails.password}</p>
                        <p><strong>Bus Number:</strong> {driverDetails.busNumber}</p>
                        <p><strong>Driver Name:</strong> {driverDetails.driverName}</p>
                        <p><strong>Driver Contact Number:</strong> {driverDetails.driverContactNumber}</p>
                        <p><strong>Driver Address:</strong> {driverDetails.driverAddress}</p>
                        <p><strong>Driver Licence Number:</strong> {driverDetails.driverLicenceNumber}</p>
                        <p><strong>Driver DOB:</strong> {driverDetails.driverDateOfBirth}</p>
                        <p><strong>Conductor Name:</strong> {driverDetails.conductorName}</p>
                        <p><strong>Conductor Contact Number:</strong> {driverDetails.conductorContactNumber}</p>
                        <p><strong>Conductor Address:</strong> {driverDetails.conductorAddress}</p>
                        <p><strong>Conductor DOB:</strong> {driverDetails.conductorDateOfBirth}</p>

                        {confirmDelete && (
                            <div className="mt-4">
                                <p>Are you sure you want to delete this driver?</p>
                                <button onClick={handleDeleteDriver} className="m-3 p-2 bg-red-500 text-white rounded-md">Confirm Delete</button>
                                <button onClick={() => setconfirmDelete(false)} className="m-3 p-2 bg-gray-500 text-white rounded-md">Cancel</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default DeleteDriver;