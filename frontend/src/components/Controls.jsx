import React from 'react';

const Controls = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e] py-8 px-4 pt-24">
            <div className="max-w-5xl mx-auto">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-orange-500/30 shadow-2xl">
                    <h1 className="text-4xl font-bold mb-2 text-white text-center">How to Use the Application</h1>
                    <p className="text-lg text-gray-400 text-center mb-8">
                        Step-by-step instructions for all features and user roles
                    </p>

                    <div className="space-y-8">
                        {/* Role-Based Access Control */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-orange-500">
                            <h2 className="text-2xl font-bold mb-4 text-orange-400">1. Role-Based Access Control</h2>
                            <p className="text-gray-300 mb-4">The application supports three user roles with different access levels:</p>
                            <div className="space-y-4">
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-orange-300">👨‍💼 Admin</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li>Full access to all management features</li>
                                        <li>Can manage Buses, Drivers, Routes, and Stops</li>
                                        <li>Access to dashboard with management cards</li>
                                        <li>View, Add, and Delete operations for all entities</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-blue-300">🚌 Driver</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li>Access to driver-specific dashboard</li>
                                        <li>Can take student attendance (Morning and Afternoon)</li>
                                        <li>View bus assignment, schedule, and updates</li>
                                        <li>Click on dashboard cards to view detailed information</li>
                                    </ul>
                                </div>
                                <div className="bg-gray-800/50 rounded-lg p-4">
                                    <h3 className="text-xl font-semibold mb-2 text-green-300">👤 Passenger</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li>Access to passenger-specific dashboard</li>
                                        <li>Track buses in real-time</li>
                                        <li>View routes, stops, and schedules</li>
                                        <li>Click on dashboard cards to view detailed information</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Login Section */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-blue-500">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">2. Logging In</h2>
                            <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                <li><strong>Navigate to Login:</strong> Click the "Login" button in the Navbar or go to the Login page</li>
                                <li><strong>Dummy Credentials:</strong> The login page displays three credential cards for quick access:
                                    <ul className="list-disc ml-6 mt-2 space-y-1">
                                        <li><strong>Admin:</strong> username: <code className="bg-gray-800 px-2 py-1 rounded">admin</code>, password: <code className="bg-gray-800 px-2 py-1 rounded">admin123</code></li>
                                        <li><strong>Driver:</strong> username: <code className="bg-gray-800 px-2 py-1 rounded">driver</code>, password: <code className="bg-gray-800 px-2 py-1 rounded">driver123</code></li>
                                        <li><strong>Passenger:</strong> username: <code className="bg-gray-800 px-2 py-1 rounded">passenger</code>, password: <code className="bg-gray-800 px-2 py-1 rounded">passenger123</code></li>
                                    </ul>
                                </li>
                                <li><strong>Quick Fill:</strong> Click on any credential card to automatically fill the login form</li>
                                <li><strong>Authentication:</strong> After successful login, you'll be redirected to your role-specific dashboard</li>
                            </ul>
                        </div>

                        {/* Admin Features */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-orange-500">
                            <h2 className="text-2xl font-bold mb-4 text-orange-400">3. Admin Features (Admin Only)</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-orange-300">Managing Buses</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li><strong>View Buses:</strong> Navigate to "Manage Buses" → "View" to see all buses</li>
                                        <li><strong>Add a Bus:</strong> Navigate to "Manage Buses" → "Add" and fill in Bus Number, Name, Source/Destination Stops, and timings</li>
                                        <li><strong>Delete a Bus:</strong> Navigate to "Manage Buses" → "Delete", enter Bus Number, and confirm deletion</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-orange-300">Managing Drivers</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li><strong>View Drivers:</strong> Navigate to "Manage Drivers" → "View" to see all drivers</li>
                                        <li><strong>Add a Driver:</strong> Navigate to "Manage Drivers" → "Add" and fill in User ID, Password, Bus Number, Driver details, and Conductor details</li>
                                        <li><strong>Delete a Driver:</strong> Navigate to "Manage Drivers" → "Delete", enter User ID, and confirm deletion</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-orange-300">Managing Stops</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li><strong>View Stops:</strong> Navigate to "Manage Stops" → "View" to see all bus stops</li>
                                        <li><strong>Add a Stop:</strong> Navigate to "Manage Stops" → "Add" and fill in Stop ID, Name, Latitude, and Longitude</li>
                                        <li><strong>Delete a Stop:</strong> Navigate to "Manage Stops" → "Delete", enter Stop ID, and confirm deletion</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-orange-300">Managing Routes</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li><strong>View Routes:</strong> Navigate to "Manage Routes" → "View" to see all routes</li>
                                        <li><strong>Add a Route:</strong> Navigate to "Manage Routes" → "Add" and fill in Route Number, Stops, Buses, Journey Time, and Operating Days</li>
                                        <li><strong>Delete a Route:</strong> Navigate to "Manage Routes" → "Delete", enter Route Number, and confirm deletion</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Driver Features */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-blue-500">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">4. Driver Features</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-blue-300">📋 Taking Attendance</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li>Click on "Take Attendance" card in the Driver Dashboard</li>
                                        <li>Select a date using the date picker</li>
                                        <li>View list of all students assigned to your bus</li>
                                        <li>Use toggle buttons to mark students as Present/Absent for Morning and Afternoon</li>
                                        <li>Click "Save Attendance" to save the records</li>
                                        <li>View summary statistics at the bottom</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-blue-300">Dashboard Cards</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li><strong>Your Bus Assignment:</strong> Click to view bus details, route information, and conductor details</li>
                                        <li><strong>Schedule:</strong> Click to view morning and afternoon schedules with stops and working days</li>
                                        <li><strong>Updates:</strong> Click to view important notifications and announcements</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Passenger Features */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-green-500">
                            <h2 className="text-2xl font-bold mb-4 text-green-400">5. Passenger Features</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-semibold mb-2 text-green-300">Dashboard Cards</h3>
                                    <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                        <li><strong>Track Bus:</strong> Click to view real-time bus location, next stop, estimated arrival, and nearby buses</li>
                                        <li><strong>Routes & Stops:</strong> Click to view all available routes with stops, distances, durations, and all bus stop locations</li>
                                        <li><strong>Schedule:</strong> Click to view bus schedules for different routes with timings and operating days</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Profile Section */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-purple-500">
                            <h2 className="text-2xl font-bold mb-4 text-purple-400">6. My Profile</h2>
                            <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                <li><strong>Access Profile:</strong> Click "My Profile" in the Navbar after logging in</li>
                                <li><strong>View Details:</strong> See your role-specific information (Admin details, Driver details with conductor info, or Passenger details)</li>
                                <li><strong>Edit Profile:</strong> Click "Edit Profile" button to modify your information</li>
                                <li><strong>Save Changes:</strong> Click "Save Changes" to update your profile, or "Cancel" to discard changes</li>
                                <li><strong>Role Badge:</strong> Your role is displayed as a colored badge at the top of the profile</li>
                            </ul>
                        </div>

                        {/* Navigation Section */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-yellow-500">
                            <h2 className="text-2xl font-bold mb-4 text-yellow-400">7. Navigation & Logout</h2>
                            <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                <li><strong>Navbar:</strong> The enhanced navbar shows your role and username when logged in</li>
                                <li><strong>My Profile:</strong> Access your profile from the Navbar (visible after login)</li>
                                <li><strong>Login Button:</strong> Appears in Navbar when not logged in</li>
                                <li><strong>Logout:</strong> Click "Logout" button in the Navbar to sign out and return to login page</li>
                                <li><strong>Mobile Menu:</strong> On mobile devices, use the hamburger menu to access navigation links</li>
                            </ul>
                        </div>

                        {/* General Tips */}
                        <div className="bg-gray-700/50 rounded-lg p-6 border-l-4 border-cyan-500">
                            <h2 className="text-2xl font-bold mb-4 text-cyan-400">8. General Tips</h2>
                            <ul className="list-disc ml-6 space-y-2 text-gray-300">
                                <li>All dashboard cards are clickable and show detailed information in modals</li>
                                <li>Use the date picker in Attendance to view or mark attendance for different dates</li>
                                <li>The 3D Bus model is visible on all dashboards</li>
                                <li>Profile information is role-specific and can be edited</li>
                                <li>Management features (Bus, Driver, Route, Stop) are only accessible to Admin users</li>
                                <li>Chatbot is available on all dashboards for assistance</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Controls;