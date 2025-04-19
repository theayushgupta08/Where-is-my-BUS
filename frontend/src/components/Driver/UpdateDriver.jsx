import React, { useState } from 'react';
import axios from 'axios';

const UpdateDriver = () => {
    const [userId, setUserId] = useState('');
    const [updatedDriver, setUpdatedDriver] = useState({
        password: '',
        busNumber: '',
        driverName: '',
        driverContactNumber: '',
        driverAddress: '',
        driverLicenceNumber: '',
        driverDateOfBirth: '',
        conductorName: '',
        conductorContactNumber: '',
        conductorAddress: '',
        conductorDateOfBirth: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedDriver({ ...updatedDriver, [name]: value });
    };

    const handleUpdateDriver = async () => {
        try {
            await axios.post('/api/update-driver', { userId, ...updatedDriver });
            alert('Driver updated successfully');
            setUpdatedDriver({
                password: '',
                busNumber: '',
                driverName: '',
                driverContactNumber: '',
                driverAddress: '',
                driverLicenceNumber: '',
                driverDateOfBirth: '',
                conductorName: '',
                conductorContactNumber: '',
                conductorAddress: '',
                conductorDateOfBirth: ''
            });
        } catch (error) {
            console.error('Error updating driver:', error);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen m-14">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-auto wave-group container">
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Update Driver</h1>
                <input
                    type="text"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID"
                    className="input"
                />
                <input
                    type="password"
                    name="password"
                    value={updatedDriver.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="input"
                />
                <input
                    type="text"
                    name="busNumber"
                    value={updatedDriver.busNumber}
                    onChange={handleInputChange}
                    placeholder="Bus Number"
                    className="input"
                />
                <input
                    type="text"
                    name="driverName"
                    value={updatedDriver.driverName}
                    onChange={handleInputChange}
                    placeholder="Driver Name"
                    className="input"
                />
                <input
                    type="text"
                    name="driverContactNumber"
                    value={updatedDriver.driverContactNumber}
                    onChange={handleInputChange}
                    placeholder="Driver Contact Number"
                    className="input"
                />
                <input
                    type="text"
                    name="driverAddress"
                    value={updatedDriver.driverAddress}
                    onChange={handleInputChange}
                    placeholder="Driver Address"
                    className="input"
                />
                <input
                    type="text"
                    name="driverLicenceNumber"
                    value={updatedDriver.driverLicenceNumber}
                    onChange={handleInputChange}
                    placeholder="Driver Licence Number"
                    className="input"
                />
                <input
                    type="text"
                    name="driverDateOfBirth"
                    value={updatedDriver.driverDateOfBirth}
                    onChange={handleInputChange}
                    placeholder="Driver Date of Birth"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorName"
                    value={updatedDriver.conductorName}
                    onChange={handleInputChange}
                    placeholder="Conductor Name"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorContactNumber"
                    value={updatedDriver.conductorContactNumber}
                    onChange={handleInputChange}
                    placeholder="Conductor Contact Number"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorAddress"
                    value={updatedDriver.conductorAddress}
                    onChange={handleInputChange}
                    placeholder="Conductor Address"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorDateOfBirth"
                    value={updatedDriver.conductorDateOfBirth}
                    onChange={handleInputChange}
                    placeholder="Conductor Date of Birth"
                    className="input"
                />
                <button onClick={handleUpdateDriver} className=" m-3 p-2 bg-blue-500 text-white">Update Driver</button>
            </div>
        </div>
    );
};

export default UpdateDriver;