import React, { useState, useEffect } from 'react';
import axios from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editedProfile, setEditedProfile] = useState({});
    const [saving, setSaving] = useState(false);
    const navigate = useNavigate();

    const username = localStorage.getItem('username') || '';
    const userRole = localStorage.getItem('userRole') || '';

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`/profile/${username}`);
            if (response.status === 200) {
                setProfile(response.data.profile);
                setEditedProfile(response.data.profile);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to fetch profile');
            console.error('Error fetching profile:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            // In a real app, you would call an update endpoint here
            // For now, we'll just update the local state
            setProfile(editedProfile);
            setIsEditing(false);
            setSaving(false);
            // Show success message
            alert('Profile updated successfully!');
        } catch (error) {
            setError('Failed to update profile');
            console.error('Error updating profile:', error);
            setSaving(false);
        }
    };

    const handleCancel = () => {
        setEditedProfile(profile);
        setIsEditing(false);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e] pt-24">
                <div className="text-white text-xl">Loading profile...</div>
            </div>
        );
    }

    if (error && !profile) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e] pt-24">
                <div className="text-red-500 text-xl">{error}</div>
            </div>
        );
    }

    const displayData = isEditing ? editedProfile : profile;

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e] py-8 px-4 pt-24">
            <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-orange-500/30 shadow-2xl">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-3xl font-bold text-white">My Profile</h1>
                        {!isEditing ? (
                            <button
                                onClick={() => setIsEditing(true)}
                                className="px-6 py-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-lg transition duration-300"
                            >
                                Edit Profile
                            </button>
                        ) : (
                            <div className="flex gap-3">
                                <button
                                    onClick={handleCancel}
                                    className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white font-semibold rounded-lg transition duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleSave}
                                    disabled={saving}
                                    className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300 disabled:opacity-50"
                                >
                                    {saving ? 'Saving...' : 'Save Changes'}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Role Badge */}
                    <div className="mb-6">
                        <span className={`px-4 py-2 rounded-lg text-sm font-semibold capitalize ${
                            userRole === 'admin' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                            userRole === 'driver' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                            'bg-green-500/20 text-green-400 border border-green-500/30'
                        }`}>
                            {userRole}
                        </span>
                    </div>

                    {/* Profile Content */}
                    <div className="space-y-6">
                        {/* Basic Information */}
                        <div className="bg-gray-700/50 rounded-lg p-6">
                            <h2 className="text-xl font-semibold text-orange-400 mb-4">Basic Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-gray-400 text-sm mb-2">Username</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="username"
                                            value={displayData.username || ''}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                        />
                                    ) : (
                                        <p className="text-white font-medium">{displayData.username}</p>
                                    )}
                                </div>
                                {displayData.userId && (
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">User ID</label>
                                        <p className="text-white font-medium">{displayData.userId}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Role-Specific Information */}
                        {userRole === 'admin' && (
                            <div className="bg-gray-700/50 rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-orange-400 mb-4">Admin Details</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Admin Name</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="adminName"
                                                value={displayData.adminName || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.adminName || 'N/A'}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Email</label>
                                        {isEditing ? (
                                            <input
                                                type="email"
                                                name="email"
                                                value={displayData.email || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.email || 'N/A'}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Contact Number</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="contactNumber"
                                                value={displayData.contactNumber || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.contactNumber || 'N/A'}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Department</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="department"
                                                value={displayData.department || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.department || 'N/A'}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}

                        {userRole === 'driver' && (
                            <>
                                <div className="bg-gray-700/50 rounded-lg p-6">
                                    <h2 className="text-xl font-semibold text-orange-400 mb-4">Driver Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Driver Name</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="driverName"
                                                    value={displayData.driverName || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.driverName || 'N/A'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Bus Number</label>
                                            <p className="text-white font-medium">{displayData.busNumber || 'N/A'}</p>
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Contact Number</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="driverContactNumber"
                                                    value={displayData.driverContactNumber || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.driverContactNumber || 'N/A'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">License Number</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="driverLicenceNumber"
                                                    value={displayData.driverLicenceNumber || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.driverLicenceNumber || 'N/A'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Address</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="driverAddress"
                                                    value={displayData.driverAddress || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.driverAddress || 'N/A'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Date of Birth</label>
                                            {isEditing ? (
                                                <input
                                                    type="date"
                                                    name="driverDateOfBirth"
                                                    value={displayData.driverDateOfBirth || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.driverDateOfBirth || 'N/A'}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <div className="bg-gray-700/50 rounded-lg p-6">
                                    <h2 className="text-xl font-semibold text-orange-400 mb-4">Conductor Information</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Conductor Name</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="conductorName"
                                                    value={displayData.conductorName || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.conductorName || 'N/A'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Contact Number</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="conductorContactNumber"
                                                    value={displayData.conductorContactNumber || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.conductorContactNumber || 'N/A'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Address</label>
                                            {isEditing ? (
                                                <input
                                                    type="text"
                                                    name="conductorAddress"
                                                    value={displayData.conductorAddress || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.conductorAddress || 'N/A'}</p>
                                            )}
                                        </div>
                                        <div>
                                            <label className="block text-gray-400 text-sm mb-2">Date of Birth</label>
                                            {isEditing ? (
                                                <input
                                                    type="date"
                                                    name="conductorDateOfBirth"
                                                    value={displayData.conductorDateOfBirth || ''}
                                                    onChange={handleInputChange}
                                                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                                />
                                            ) : (
                                                <p className="text-white font-medium">{displayData.conductorDateOfBirth || 'N/A'}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}

                        {userRole === 'passenger' && (
                            <div className="bg-gray-700/50 rounded-lg p-6">
                                <h2 className="text-xl font-semibold text-orange-400 mb-4">Passenger Information</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Passenger Name</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="passengerName"
                                                value={displayData.passengerName || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.passengerName || 'N/A'}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Email</label>
                                        {isEditing ? (
                                            <input
                                                type="email"
                                                name="email"
                                                value={displayData.email || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.email || 'N/A'}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Contact Number</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="contactNumber"
                                                value={displayData.contactNumber || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.contactNumber || 'N/A'}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Address</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="address"
                                                value={displayData.address || displayData.passengerAddress || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.address || displayData.passengerAddress || 'N/A'}</p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="block text-gray-400 text-sm mb-2">Date of Birth</label>
                                        {isEditing ? (
                                            <input
                                                type="date"
                                                name="dateOfBirth"
                                                value={displayData.dateOfBirth || ''}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                        ) : (
                                            <p className="text-white font-medium">{displayData.dateOfBirth || 'N/A'}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
