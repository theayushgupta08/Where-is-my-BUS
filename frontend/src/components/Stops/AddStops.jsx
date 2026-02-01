import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import '../../index.css';
import Breadcrumb from '../Breadcrumb';


const AddStops = () => {
    const [newStops, setNewStops] = useState({
        stopId: '',
        stopName: '',
        latitude: '',
        longitude: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStops({ ...newStops, [name]: value });
    };


    const handleAddStops = async () => {
        try {
            console.log('Adding Stops:', newStops);
            const response = await axiosInstance.post('/stops', newStops);
            console.log('Recieved Stops:', newStops);

            if (response.status === 201) {
                alert(response.data.message); // Use the message from the response
                setNewStops({
                    stopId: '',
                    stopName: '',
                    latitude: '',
                    longitude: '',
                });
            } else {
                alert('Failed to add Stops');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message); // Use the message from the error response
            } else {
                alert('Error adding Stops');
            }
            console.error('Error adding Stops:', error);
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen m-14">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-auto wave-group container">
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Add Stops</h1>
                <input
                    type="text"
                    name="stopId"
                    value={newStops.stopId}
                    onChange={handleInputChange}
                    placeholder="Stop ID"
                    className="input"
                />
                <input
                    type="text"
                    name="stopName"
                    value={newStops.stopName}
                    onChange={handleInputChange}
                    placeholder="Stop Name"
                    className="input"
                />
                <input
                    type="text"
                    name="latitude"
                    value={newStops.latitude}
                    onChange={handleInputChange}
                    placeholder="Stop Latitude"
                    className="input"
                />
                <input
                    type="text"
                    name="longitude"
                    value={newStops.longitude}
                    onChange={handleInputChange}
                    placeholder="Stop Longitude"
                    className="input"
                />

                <button onClick={handleAddStops} className=" m-3 p-2 bg-blue-500 text-white">Add Stop</button>
            </div>
        </div>
    );
};

export default AddStops;