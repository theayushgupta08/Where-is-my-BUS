import React, { useState } from 'react';
import axios from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const response = await axios.post('/login', credentials);
            if (response.status === 200 && response.data.user) {
                // Save authentication and role in localStorage
                localStorage.setItem('isAuthenticated', 'true');
                localStorage.setItem('userRole', response.data.user.role);
                localStorage.setItem('username', response.data.user.username);
                
                // Dispatch custom event to notify Navbar of auth change
                window.dispatchEvent(new Event('authChange'));
                
                navigate('/dashboard'); // Redirect to the dashboard
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    const handleCardClick = (cred) => {
        setCredentials({
            username: cred.username,
            password: cred.password
        });
        setError(''); // Clear any previous errors
    };

    const dummyCredentials = [
        { role: 'Admin', username: 'admin', password: 'admin123', gradient: 'from-orange-500 to-orange-600' },
        { role: 'Driver', username: 'driver', password: 'driver123', gradient: 'from-blue-500 to-blue-600' },
        { role: 'Passenger', username: 'passenger', password: 'passenger123', gradient: 'from-green-500 to-green-600' }
    ];

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e] pt-24 pb-8 px-4">
            <div className="p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg w-[90%] max-w-md">
                <h1 className="text-4xl font-bold mb-6 text-orange-700">Login</h1>
                {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
                <input
                    type="text"
                    name="username"
                    value={credentials.username}
                    onChange={handleInputChange}
                    placeholder="Username"
                    className="input mb-4 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                    type="password"
                    name="password"
                    value={credentials.password}
                    onChange={handleInputChange}
                    placeholder="Password"
                    className="input mb-4 border border-gray-300 rounded-md p-3 w-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <button
                    onClick={handleLogin}
                    className="m-3 p-3 w-full bg-orange-600 text-white font-semibold rounded-md hover:bg-orange-700 transition duration-300"
                >
                    Login
                </button>
                
                {/* Dummy Credentials Section */}
                <div className="mt-6 w-full border-t border-gray-300 pt-4">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 text-center">Dummy Credentials</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {dummyCredentials.map((cred, index) => (
                            <div
                                key={index}
                                onClick={() => handleCardClick(cred)}
                                className={`relative overflow-hidden bg-gradient-to-br ${cred.gradient} p-4 rounded-lg border-2 border-transparent hover:border-white cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg group`}
                            >
                                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
                                <div className="relative z-10">
                                    <div className="flex flex-col items-center justify-between mb-2">
                                        <p className="font-bold text-white text-lg">{cred.role}</p>
                                        <span className="text-white/80 text-xs group-hover:text-white transition-colors">(Click to fill)</span>
                                    </div>
                                    <div className="space-y-1">
                                        <p className="text-white/90 text-sm">
                                            <span className="font-medium">User:</span> {cred.username}
                                        </p>
                                        <p className="text-white/90 text-sm">
                                            <span className="font-medium">Pass:</span> {cred.password}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;