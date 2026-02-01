import React, { useState, useEffect } from 'react';
import axiosInstance from '../../axiosInstance';
import Breadcrumb from '../Breadcrumb';

const ViewStops = () => {
    const [stops, setStops] = useState([]);

    useEffect(() => {
        fetchStops();
    }, []);

    const fetchStops = async () => {
        try {
            const response = await axiosInstance.get('/stops');
            setStops(response.data);
        } catch (error) {
            console.error('Error fetching stops:', error);
        }
    };

    return (
        <div className="p-6 flex flex-col flex-wrap justify-center items-center m-20">
            <div className="w-full max-w-7xl mb-4">
                <Breadcrumb />
            </div>
            <h1 className="text-3xl font-bold mb-4 text-orange-700">View Stops</h1>


            <table className="table-auto border-collapse border text-black border-gray-300 w-auto text-center">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-300 text-black px-4 py-2">Sr. No.</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Stop ID</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Stop Name</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Latitude</th>
                        <th className="border border-gray-300 text-black px-4 py-2">Longitude</th>
                    </tr>
                </thead>
                <tbody>
                    {stops.map((stop, index) => (
                        <tr key={stop._id} className="odd:bg-white text-black even:bg-gray-100">
                            <td className="border border-gray-300 text-black px-4 py-2">{index + 1}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{stop.stopId}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{stop.stopName}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{stop.latitude}</td>
                            <td className="border border-gray-300 text-black px-4 py-2">{stop.longitude}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ViewStops;