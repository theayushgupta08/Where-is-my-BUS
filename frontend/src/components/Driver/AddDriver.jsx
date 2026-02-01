import React, { useState } from 'react';
import axiosInstance from '../../axiosInstance';
import '../../index.css';
import Breadcrumb from '../Breadcrumb';


const AddDriver = () => {
    const [newDriver, setNewDriver] = useState({
        userId: '',
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
        setNewDriver({ ...newDriver, [name]: value });
    };


    const handleAddDriver = async () => {
        try {
            console.log('Adding Driver:', newDriver);
            const response = await axiosInstance.post('/drivers', newDriver);
            console.log('Recieved Driver:', newDriver);

            if (response.status === 201) {
                alert(response.data.message); // Use the message from the response
                setNewDriver({
                    userId: '',
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
            } else {
                alert('Failed to add driver');
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                alert(error.response.data.message); // Use the message from the error response
            } else {
                alert('Error adding driver');
            }
            console.error('Error adding driver:', error);
        }
    };


    return (
        <div className="flex justify-center items-center min-h-screen m-14">
            <div className="p-6 flex flex-col justify-center items-center m-20 w-auto wave-group container">
                <div className="w-full max-w-7xl mb-4">
                    <Breadcrumb />
                </div>
                <h1 className="text-3xl font-bold mb-4 text-orange-700">Add Driver</h1>
                <input
                    type="text"
                    name="userId"
                    value={newDriver.userId}
                    onChange={handleInputChange}
                    placeholder="User ID"
                    className="input"
                />
                <input
                    type="password"
                    name="password"
                    value={newDriver.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="input"
                />
                <input
                    type="text"
                    name="busNumber"
                    value={newDriver.busNumber}
                    onChange={handleInputChange}
                    placeholder="Bus Number"
                    className="input"
                />
                <input
                    type="text"
                    name="driverName"
                    value={newDriver.driverName}
                    onChange={handleInputChange}
                    placeholder="Driver Name"
                    className="input"
                />
                <input
                    type="text"
                    name="driverContactNumber"
                    value={newDriver.driverContactNumber}
                    onChange={handleInputChange}
                    placeholder="Driver Contact Number"
                    className="input"
                />
                <input
                    type="text"
                    name="driverAddress"
                    value={newDriver.driverAddress}
                    onChange={handleInputChange}
                    placeholder="Driver Address"
                    className="input"
                />
                <input
                    type="text"
                    name="driverLicenceNumber"
                    value={newDriver.driverLicenceNumber}
                    onChange={handleInputChange}
                    placeholder="Driver Licence Number"
                    className="input"
                />
                <input
                    type="text"
                    name="driverDateOfBirth"
                    value={newDriver.driverDateOfBirth}
                    onChange={handleInputChange}
                    placeholder="Driver Date of Birth"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorName"
                    value={newDriver.conductorName}
                    onChange={handleInputChange}
                    placeholder="Conductor Name"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorContactNumber"
                    value={newDriver.conductorContactNumber}
                    onChange={handleInputChange}
                    placeholder="Conductor Contact Number"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorAddress"
                    value={newDriver.conductorAddress}
                    onChange={handleInputChange}
                    placeholder="Conductor Address"
                    className="input"
                />
                <input
                    type="text"
                    name="conductorDateOfBirth"
                    value={newDriver.conductorDateOfBirth}
                    onChange={handleInputChange}
                    placeholder="Conductor Date of Birth"
                    className="input"
                />
                <button onClick={handleAddDriver} className=" m-3 p-2 bg-blue-500 text-white">Add Driver</button>
            </div>
        </div>
    );
};

export default AddDriver;