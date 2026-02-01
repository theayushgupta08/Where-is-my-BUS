import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const UpdateBus = () => {
    const [busNumber, setbusNumber] = useState('');
    const [updatedBus, setUpdatedBus] = useState({
        busNumber: '',
        busName: '',
        registrationNumber: '',
        sourceStop: '',
        destinationStop: '',
        sourceTime: '',
        destinationTime: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedBus({ ...updatedBus, [name]: value });
    };

    const handleUpdateBus = async () => {
        try {
            await axiosInstance.put(`/buses/${busNumber}`, updatedBus);
            alert('Bus updated successfully');
            setUpdatedBus({
                busNumber: '',
                busName: '',
                registrationNumber: '',
                sourceStop: '',
                destinationStop: '',
                sourceTime: '',
                destinationTime: ''
            });
        } catch (error) {
            console.error('Error updating bus:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-[70%] wave-group container">
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Update Bus</h1>

                <input
                    type="text"
                    name="busNumber"
                    value={busNumber}
                    onChange={(e) => setbusNumber(e.target.value)}
                    placeholder="Bus Number"
                    className="input"
                />
                <input
                    type="text"
                    name="busName"
                    value={updatedBus.busName}
                    onChange={handleInputChange}
                    placeholder="Bus Name"
                    className="input"
                />
                <input
                    type="text"
                    name="registrationNumber"
                    value={updatedBus.registrationNumber}
                    onChange={handleInputChange}
                    placeholder="Registration Number"
                    className="input"
                />
                <input
                    type="text"
                    name="sourceStop"
                    value={updatedBus.sourceStop}
                    onChange={handleInputChange}
                    placeholder="Source Stop"
                    className="input"
                />
                <input
                    type="text"
                    name="destinationStop"
                    value={updatedBus.destinationStop}
                    onChange={handleInputChange}
                    placeholder="Destination Stop"
                    className="input"
                />
                <input
                    type="text"
                    name="sourceTime"
                    value={updatedBus.sourceTime}
                    onChange={handleInputChange}
                    placeholder="Source Time"
                    className="input"
                />
                <input
                    type="text"
                    name="destinationTime"
                    value={updatedBus.destinationTime}
                    onChange={handleInputChange}
                    placeholder="Destination Time"
                    className="input"
                />
                <button onClick={handleUpdateBus} className="m-3 p-2 bg-blue-500 text-white">Update Bus</button>
            </div>
        </div>
    );
};

export default UpdateBus;