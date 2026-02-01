import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance'; // Import the Axios instance
import '../../index.css';
import Breadcrumb from '../Breadcrumb';


const AddBus = () => {
    const [newBus, setNewBus] = useState({
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
        setNewBus({ ...newBus, [name]: value });
    };

    const handleAddBus = async () => {
        try {
            console.log('Adding bus:', newBus);
            const response = await axiosInstance.post('/buses', newBus);
            console.log('Recieved bus:', newBus);

            if (response.status === 201) {
                alert(response.data.message); // Use the message from the response
                setNewBus({
                    busNumber: '',
                    busName: '',
                    registrationNumber: '',
                    sourceStop: '',
                    destinationStop: '',
                    sourceTime: '',
                    destinationTime: ''
                });
            } else {
                alert('Failed to add bus');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message); // Use the message from the error response
            } else {
                alert('Error adding 344 bus');
            }
            console.error('Error adding bus:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-[70%] wave-group container">
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Add Bus</h1>
                <input
                    type="text"
                    name="busNumber"
                    value={newBus.busNumber}
                    onChange={handleInputChange}
                    placeholder="Bus Number"
                    className="input"
                />

                <input
                    type="text"
                    name="busName"
                    value={newBus.busName}
                    onChange={handleInputChange}
                    placeholder="Bus Name"
                    className="input"
                />
                <input
                    type="text"
                    name="registrationNumber"
                    value={newBus.registrationNumber}
                    onChange={handleInputChange}
                    placeholder="Registration Number"
                    className="mb-2 p-2 border input"
                />
                <input
                    type="text"
                    name="sourceStop"
                    value={newBus.sourceStop}
                    onChange={handleInputChange}
                    placeholder="Source Stop"
                    className="mb-2 p-2 border input"
                />
                <input
                    type="text"
                    name="destinationStop"
                    value={newBus.destinationStop}
                    onChange={handleInputChange}
                    placeholder="Destination Stop"
                    className="mb-2 p-2 border input"
                />
                <input
                    type="text"
                    name="sourceTime"
                    value={newBus.sourceTime}
                    onChange={handleInputChange}
                    placeholder="Source Time"
                    className="mb-2 p-2 border input"
                />
                <input
                    type="text"
                    name="destinationTime"
                    value={newBus.destinationTime}
                    onChange={handleInputChange}
                    placeholder="Destination Time"
                    className="mb-2 p-2 border input"
                />
                <button onClick={handleAddBus} className="m-3 p-2 bg-blue-500 text-white">Add Bus</button>
            </div>
        </div>
    );
};

export default AddBus;