import React, { useState, useEffect } from 'react';
import axiosInstance from '../axiosInstance';

const Attendance = () => {
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
    const [saving, setSaving] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const driverUsername = localStorage.getItem('username') || 'driver';

    useEffect(() => {
        fetchStudents();
        fetchAttendance();
    }, [selectedDate]);

    const fetchStudents = async () => {
        try {
            setLoading(true);
            const response = await axiosInstance.get(`/attendance/${driverUsername}/students`);
            if (response.status === 200) {
                setStudents(response.data.students || []);
                // Initialize attendance state for all students
                const initialAttendance = {};
                response.data.students.forEach(student => {
                    initialAttendance[student._id] = {
                        morning: false,
                        afternoon: false
                    };
                });
                setAttendance(initialAttendance);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to fetch students');
            console.error('Error fetching students:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchAttendance = async () => {
        try {
            const response = await axiosInstance.get(`/attendance/${driverUsername}?date=${selectedDate}`);
            if (response.status === 200 && response.data.attendance) {
                // Merge fetched attendance with current state
                setAttendance(prev => {
                    const updated = { ...prev };
                    Object.keys(response.data.attendance).forEach(studentId => {
                        if (updated[studentId]) {
                            updated[studentId] = {
                                morning: response.data.attendance[studentId].morning || false,
                                afternoon: response.data.attendance[studentId].afternoon || false
                            };
                        }
                    });
                    return updated;
                });
            }
        } catch (error) {
            console.error('Error fetching attendance:', error);
        }
    };

    const handleToggle = (studentId, period) => {
        setAttendance(prev => ({
            ...prev,
            [studentId]: {
                ...prev[studentId],
                [period]: !prev[studentId]?.[period]
            }
        }));
    };

    const handleSave = async () => {
        try {
            setSaving(true);
            setSaveMessage('');
            const response = await axiosInstance.post(`/attendance/${driverUsername}`, {
                date: selectedDate,
                attendance: attendance
            });
            if (response.status === 200) {
                setSaveMessage('Attendance saved successfully!');
                setTimeout(() => setSaveMessage(''), 3000);
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Failed to save attendance');
            console.error('Error saving attendance:', error);
        } finally {
            setSaving(false);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e]">
                <div className="text-white text-xl">Loading students...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#050816] via-[#1a1a2e] to-[#16213e] py-8 px-4 pt-24">
            <div className="max-w-6xl mx-auto">
                <div className="bg-tertiary rounded-2xl p-6 mb-6">
                    <h1 className="text-3xl font-bold text-white mb-4">Student Attendance</h1>
                    
                    {/* Date Selector */}
                    <div className="mb-6">
                        <label className="block text-white mb-2 font-semibold">Select Date:</label>
                        <input
                            type="date"
                            value={selectedDate}
                            onChange={(e) => setSelectedDate(e.target.value)}
                            className="px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-500/20 border border-red-500 rounded-lg text-red-300">
                            {error}
                        </div>
                    )}

                    {saveMessage && (
                        <div className="mb-4 p-3 bg-green-500/20 border border-green-500 rounded-lg text-green-300">
                            {saveMessage}
                        </div>
                    )}

                    {/* Save Button */}
                    <div className="mb-6">
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {saving ? 'Saving...' : 'Save Attendance'}
                        </button>
                    </div>
                </div>

                {/* Attendance Table */}
                <div className="bg-tertiary rounded-2xl p-6 overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="text-left py-3 px-4 text-white font-semibold">S.No</th>
                                <th className="text-left py-3 px-4 text-white font-semibold">Student Name</th>
                                <th className="text-left py-3 px-4 text-white font-semibold">Class</th>
                                <th className="text-center py-3 px-4 text-white font-semibold">Roll No.</th>
                                <th className="text-center py-3 px-4 text-white font-semibold">Morning</th>
                                <th className="text-center py-3 px-4 text-white font-semibold">Afternoon</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.length === 0 ? (
                                <tr>
                                    <td colSpan="6" className="text-center py-8 text-gray-400">
                                        No students found for this bus
                                    </td>
                                </tr>
                            ) : (
                                students.map((student, index) => (
                                    <tr key={student._id} className="border-b border-gray-800 hover:bg-gray-800/50 transition-colors">
                                        <td className="py-4 px-4 text-gray-300">{index + 1}</td>
                                        <td className="py-4 px-4 text-white font-medium">{student.studentName}</td>
                                        <td className="py-4 px-4 text-gray-300">{student.className}</td>
                                        <td className="py-4 px-4 text-center text-gray-300">{student.rollNumber}</td>
                                        <td className="py-4 px-4 text-center">
                                            <button
                                                onClick={() => handleToggle(student._id, 'morning')}
                                                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                                                    attendance[student._id]?.morning
                                                        ? 'bg-orange-600'
                                                        : 'bg-gray-600'
                                                }`}
                                            >
                                                <span
                                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                                                        attendance[student._id]?.morning ? 'translate-x-9' : 'translate-x-1'
                                                    }`}
                                                />
                                            </button>
                                            <span className="ml-2 text-sm text-gray-400">
                                                {attendance[student._id]?.morning ? 'Present' : 'Absent'}
                                            </span>
                                        </td>
                                        <td className="py-4 px-4 text-center">
                                            <button
                                                onClick={() => handleToggle(student._id, 'afternoon')}
                                                className={`relative inline-flex h-8 w-16 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 ${
                                                    attendance[student._id]?.afternoon
                                                        ? 'bg-orange-600'
                                                        : 'bg-gray-600'
                                                }`}
                                            >
                                                <span
                                                    className={`inline-block h-6 w-6 transform rounded-full bg-white transition-transform ${
                                                        attendance[student._id]?.afternoon ? 'translate-x-9' : 'translate-x-1'
                                                    }`}
                                                />
                                            </button>
                                            <span className="ml-2 text-sm text-gray-400">
                                                {attendance[student._id]?.afternoon ? 'Present' : 'Absent'}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>

                {/* Summary */}
                {students.length > 0 && (
                    <div className="mt-6 bg-tertiary rounded-2xl p-6">
                        <h2 className="text-xl font-bold text-white mb-4">Summary</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="bg-gray-800 rounded-lg p-4">
                                <p className="text-gray-400 text-sm">Total Students</p>
                                <p className="text-white text-2xl font-bold">{students.length}</p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-4">
                                <p className="text-gray-400 text-sm">Morning Present</p>
                                <p className="text-white text-2xl font-bold">
                                    {Object.values(attendance).filter(a => a?.morning).length}
                                </p>
                            </div>
                            <div className="bg-gray-800 rounded-lg p-4">
                                <p className="text-gray-400 text-sm">Afternoon Present</p>
                                <p className="text-white text-2xl font-bold">
                                    {Object.values(attendance).filter(a => a?.afternoon).length}
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Attendance;
