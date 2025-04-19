import React from 'react';

const Help = () => {
    return (
        <div className="p-6 flex flex-col justify-center items-center min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-orange-700">Help</h1>
            <p className="text-lg text-gray-700 text-center">
                This page provides help and support for using the application.
            </p>
            <ul className="list-disc mt-4 text-gray-700">
                <li>For technical support, contact the admin at support@example.com.</li>
                <li>Refer to the user manual for detailed instructions.</li>
                <li>Ensure all required fields are filled when adding or updating entries.</li>
                <li>For further assistance, call the support team at +1-800-123-4567.</li>
            </ul>
        </div>
    );
};

export default Help;