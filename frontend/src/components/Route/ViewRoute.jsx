import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const ViewRoute = () => {
    const [routes, setRoutes] = useState([]);

    useEffect(() => {
        fetchRoutes();
    }, []);

    const fetchRoutes = async () => {
        try {
            const response = await axiosInstance.get('/routes');
            setRoutes(response.data.routes); // Update to match backend response structure
        } catch (error) {
            console.error('Error fetching routes:', error);
        }
    };

    return (
        <div className="p-6 flex flex-col flex-wrap justify-center items-center m-20">
            <div className="w-full max-w-7xl mb-4">
                <Breadcrumb />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-orange-700">View Routes</h1>
            <table className="table-auto border-collapse border text-black border-gray-300 w-auto text-center">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 text-black px-4 py-2">Route Number</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Stops</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Buses</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Total Journey Time</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Operating Days</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Active</th>
                    </tr>
                </thead>
                <tbody>
                    {routes.map(route => (
                        <tr key={route._id} className="odd:bg-white text-black even:bg-gray-100">
                            <td className="border border-gray-300 text-black px-4 py-2">{route.routeNumber}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">
                                {route.stops.map(stop => stop.stopName).join(' -> ')}
                            </td>
                            <td className="border border-gray-300 text-black px-4 py-2">
                                {route.buses.map(bus => bus.busNumber).join(', ')}
                            </td>
                            <td className="border border-gray-300 text-black px-4 py-2">{route.totalJourneyTime}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{route.operatingDays}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{route.isActive ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewRoute;