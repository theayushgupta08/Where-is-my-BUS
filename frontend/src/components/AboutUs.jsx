import React from 'react';
import { teamMembers } from "../constants";

const AboutUs = () => {

    return (
        <div className="p-6 flex flex-col justify-center items-center min-h-screen mt-20">
            <h1 className="text-4xl font-bold mb-6 text-orange-700">About Us</h1>

            {/* Team Members Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Team Members</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 rounded-full mb-4"
                            />
                            <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
                            <p className="text-gray-600">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project Description Section */}
            <div className="mb-10">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Project Description</h2>
                <p className="text-lg text-gray-700 text-center max-w-3xl">
                    This project, "Where is my BUS?", is a comprehensive bus management system designed to
                    streamline the management of buses, drivers, stops, and routes. It provides an intuitive
                    interface for administrators to manage all aspects of the bus system efficiently.
                </p>
            </div>

        </div>
    );
};

export default AboutUs;