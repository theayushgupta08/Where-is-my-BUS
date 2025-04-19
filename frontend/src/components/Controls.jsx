import React from 'react';

const Controls = () => {
    return (
        <div className="p-6 flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-orange-700">Controls</h1>
            <p className="text-lg text-gray-700 text-center">
                This page provides information about how to use the application controls.
            </p>
            <ul className="list-disc mt-4 text-gray-700">
                <li>Navigate through the dashboard to manage buses, drivers, stops, and routes.</li>
                <li>Use the "Add" buttons to add new entries.</li>
                <li>Use the "View" buttons to see existing entries.</li>
                <li>Use the "Delete" buttons to remove entries.</li>
            </ul>
        </div>
    );
};

export default Controls;