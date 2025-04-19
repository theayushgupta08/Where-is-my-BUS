import React from 'react';

const Controls = () => {
    return (
        <div className="p-6 flex flex-col justify-center items-center min-h-screen mt-20">
            <h1 className="text-3xl font-bold mb-4 text-orange-700">How to Use the Application</h1>
            <p className="text-lg text-gray-700 text-center mb-6">
                This page provides step-by-step instructions for performing various tasks in the application.
            </p>

            <div className="w-full max-w-4xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">1. Managing Buses</h2>
                <ul className="list-disc ml-6 mb-6 text-gray-700">
                    <li><strong>View Buses:</strong> Navigate to "Manage Buses" and click "View". You will see a list of all buses with their details.</li>
                    <li><strong>Add a Bus:</strong> Navigate to "Manage Buses" and click "Add". Fill in the required details like Bus Number, Name, Source Stop, Destination Stop, etc., and click "Submit".</li>
                    <li><strong>Delete a Bus:</strong> Navigate to "Manage Buses" and click "Delete". Enter the Bus Number, fetch its details, and confirm the deletion.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">2. Managing Drivers</h2>
                <ul className="list-disc ml-6 mb-6 text-gray-700">
                    <li><strong>View Drivers:</strong> Navigate to "Manage Drivers" and click "View". You will see a list of all drivers with their details.</li>
                    <li><strong>Add a Driver:</strong> Navigate to "Manage Drivers" and click "Add". Fill in the required details like User ID, Password, Bus Number, Driver Name, etc., and click "Submit".</li>
                    <li><strong>Delete a Driver:</strong> Navigate to "Manage Drivers" and click "Delete". Enter the User ID, fetch the driver's details, and confirm the deletion.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">3. Managing Stops</h2>
                <ul className="list-disc ml-6 mb-6 text-gray-700">
                    <li><strong>View Stops:</strong> Navigate to "Manage Stops" and click "View". You will see a list of all stops with their details.</li>
                    <li><strong>Add a Stop:</strong> Navigate to "Manage Stops" and click "Add". Fill in the required details like Stop ID, Stop Name, Latitude, and Longitude, and click "Submit".</li>
                    <li><strong>Delete a Stop:</strong> Navigate to "Manage Stops" and click "Delete". Enter the Stop ID, fetch its details, and confirm the deletion.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">4. Managing Routes</h2>
                <ul className="list-disc ml-6 mb-6 text-gray-700">
                    <li><strong>View Routes:</strong> Navigate to "Manage Routes" and click "View". You will see a list of all routes with their details.</li>
                    <li><strong>Add a Route:</strong> Navigate to "Manage Routes" and click "Add". Fill in the required details like Route Number, Stops, Buses, Total Journey Time, etc., and click "Submit".</li>
                    <li><strong>Delete a Route:</strong> Navigate to "Manage Routes" and click "Delete". Enter the Route Number, fetch its details, and confirm the deletion.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">5. Logging In</h2>
                <ul className="list-disc ml-6 mb-6 text-gray-700">
                    <li><strong>Admin Login:</strong> Navigate to the "Login" page. Enter your admin credentials (username and password) and click "Login". Once authenticated, you will be redirected to the dashboard.</li>
                </ul>

                <h2 className="text-2xl font-bold mb-4 text-gray-800">6. Logging Out</h2>
                <ul className="list-disc ml-6 mb-6 text-gray-700">
                    <li><strong>Logout:</strong> Click the "Logout" button in the top-right corner of the Navbar. This will log you out and redirect you to the login page.</li>
                </ul>
            </div>
        </div>
    );
};

export default Controls;