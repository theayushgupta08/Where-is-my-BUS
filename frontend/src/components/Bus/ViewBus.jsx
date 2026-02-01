import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const ViewBus = () => {
    const [buses, setBuses] = useState([]);

    useEffect(() => {
        fetchBuses();
    }, []);

    const fetchBuses = async () => {
        try {
            const response = await axiosInstance.get('/buses');
            setBuses(response.data.data);
        } catch (error) {
            console.error('Error fetching buses:', error);
        }
    };

    return (
        <div className="p-6 flex flex-col flex-wrap justify-center items-center m-20">
            <div className="w-full max-w-7xl mb-4">
                <Breadcrumb />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-orange-700">View Buses</h1>

            <table className="table-auto border-collapse border text-black border-gray-300 w-auto text-center">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 text-black px-4 py-2">Sr. No.</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Bus Name</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Bus Number</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Registration Number</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Source Stop</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Source Stop Time</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Destination Stop</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Destination Stop Time</th>
                    </tr>
                </thead>
                <tbody>
                    {buses.map((bus, index) => (
                        <tr key={bus._id || bus.busNumber} className="odd:bg-white text-black even:bg-gray-100">
                            <td className="border border-gray-300 text-black px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{bus.busName}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{bus.busNumber}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{bus.registrationNumber}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">
                                {typeof bus.sourceStop === 'object' && bus.sourceStop?.name ? bus.sourceStop.name : bus.sourceStop}
                            </td>
                            <td className="border border-gray-300 text-black px-4 py-2">{bus.sourceTime}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">
                                {typeof bus.destinationStop === 'object' && bus.destinationStop?.name ? bus.destinationStop.name : bus.destinationStop}
                            </td>
                            <td className="border border-gray-300 text-black px-4 py-2">{bus.destinationTime}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
};

export default ViewBus;