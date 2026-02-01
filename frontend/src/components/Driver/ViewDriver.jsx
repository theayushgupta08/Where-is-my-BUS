import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const ViewDriver = () => {
    const [drivers, setDrivers] = useState([]);

    useEffect(() => {
        fetchDrivers();
    }, []);

    const fetchDrivers = async () => {
        try {
            const response = await axiosInstance.get('/drivers');
            setDrivers(response.data.data);
        } catch (error) {
            console.error('Error fetching drivers:', error);
        }
    };

    return (
        <div className="p-6 flex flex-col flex-wrap justify-center items-center m-20">
            <div className="w-full max-w-7xl mb-4">
                <Breadcrumb />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-orange-700">View Drivers</h1>


            <table className="table-auto border-collapse border text-black border-gray-300 w-auto text-center">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 text-black px-4 py-2">Sr. No.</th>
                        <th className="border border-gray-300 text-black px-4 py-2">User ID</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Password</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Bus Number</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Driver Name</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Driver Contact Number</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Driver Address</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Driver Licence Number</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Driver DOB</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Conductor Name</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Conductor Contact Number</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Conductor Address</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Conductor DOB</th>
                    </tr>
                </thead>
                <tbody>
                    {drivers.map((driver, index) => (
                        <tr key={driver._id} className="odd:bg-white text-black even:bg-gray-100">
                            <td className="border border-gray-300 text-black px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.userId}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.password}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.busNumber}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.driverName}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.driverContactNumber}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.driverAddress}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.driverLicenceNumber}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.driverDateOfBirth}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.conductorName}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.conductorContactNumber}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.conductorAddress}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{driver.conductorDateOfBirth}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewDriver;