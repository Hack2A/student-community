import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { LogOut } from 'lucide-react'
import axios from 'axios'

const UserProfile = () => {
    const { userId } = useParams<{ userId: string }>();

    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear all stored user data
        localStorage.removeItem('userToken');
        localStorage.removeItem('userData');
        localStorage.removeItem('token');

        // Clear any axios authorization headers
        delete axios.defaults.headers.common['Authorization'];

        // Redirect to landing page
        navigate('/');
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-4xl mx-auto">
                {/* Header with logout button */}
                <div className="bg-white rounded-lg shadow-sm border p-6 mb-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">
                                {userId ? `${userId}'s Profile` : 'User Profile'}
                            </h1>
                            <p className="text-gray-600 mt-1">
                                Manage your Student Community profile
                            </p>
                        </div>

                        {/* Logout Button */}
                        <button
                            onClick={handleLogout}
                            className="inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                        >
                            <LogOut className="w-4 h-4 mr-2" />
                            Logout
                        </button>
                    </div>
                </div>

                {/* Profile content placeholder */}
                <div className="bg-white rounded-lg shadow-sm border p-6">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">
                        Profile Information
                    </h2>
                    <p className="text-gray-600">
                        Profile content will be added here...
                    </p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile
