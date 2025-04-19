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
            const response = await axios.post('/admin', credentials);
            if (response.status === 200) {
                // Save authentication token or flag in localStorage
                localStorage.setItem('isAuthenticated', 'true');
                navigate('/'); // Redirect to the dashboard
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Login failed. Please try again.');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="p-8 flex flex-col justify-center items-center bg-white shadow-lg rounded-lg w-[90%] max-w-md">
                <h1 className="text-4xl font-bold mb-6 text-orange-700">Admin Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
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
            </div>
        </div>
    );
};

export default Login;