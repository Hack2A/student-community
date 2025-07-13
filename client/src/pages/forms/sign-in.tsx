import React from 'react'
import { useNavigate } from 'react-router-dom';
import { googleLogin } from '../../services/login-service';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

const UserAuth = () => {

    const navigate = useNavigate();

    const handleGoogleLogin = async (credentialResponse: any) => {
        const idToken = credentialResponse.credential;
        try {
            const response = await googleLogin(idToken);
            console.log('Google login response:', response);

            navigate('/u/newUser');

        } catch (error: any) {
            console.log("Error caught in handleGoogleLogin:", error); // Add this
            if (error?.response?.status === 401) {
                console.log("Google login error 401 - setIsWaitlisted(true) called"); // Add this
            } else {
                console.error("Google login error (other):", error); // Add this
                alert("Google login failed. Please try again.");
            }
        }
    };

    const handleGoogleLoginError = () => {
        console.error("Google login error callback triggered"); // Add this
        alert("Google login failed. Please try again.");
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-extrabold text-indigo-700 mb-2">
                        Student Community
                    </h1>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Welcome!
                    </h2>
                    <p className="text-gray-600">
                        Sign in to discover hackathons, build teams, and grow your skills
                    </p>
                </div>

                {/* Sign In Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                    <div className="space-y-6">
                        <div className="w-full">
                            <GoogleOAuthProvider clientId="185103870142-n0vur7j8hn6bq8m8hpdp9kgo7ao6o07i.apps.googleusercontent.com">
                                <div className="flex justify-center">
                                    <GoogleLogin
                                        onSuccess={(credentialResponse: any) => {
                                            handleGoogleLogin(credentialResponse);
                                        }}
                                        onError={handleGoogleLoginError}
                                        size="large"
                                        width="300"
                                        theme="outline"
                                        shape="rectangular"
                                        text="signin_with"
                                    />
                                </div>
                            </GoogleOAuthProvider>
                        </div>

                        {/* Info Text */}
                        <div className="text-center">
                            <p className="text-sm text-gray-500">
                                By signing in, you agree to our
                                <p className="flex flex-col items-center">
                                    <a href="/tnc" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                        Terms of Service
                                    </a>
                                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-500 font-medium">
                                        Privacy Policy
                                    </a>
                                </p>
                            </p>
                        </div>

                        {/* Features List */}
                        <div className="bg-indigo-50 rounded-xl p-4">
                            <h3 className="text-sm font-semibold text-indigo-700 mb-3 text-center">
                                What you'll get access to:
                            </h3>
                            <ul className="space-y-2 text-sm text-indigo-600">
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Browse the site for hackathons
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Create your own team and find devs
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Join a team with relevant skills
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-4 h-4 mr-2 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Access roadmaps for hackathons and roles
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Features Section */}
                <div className="text-center">
                    <div className="grid grid-cols-3 gap-4 mt-8">
                        <div className="text-center">
                            <div className="text-indigo-600 font-semibold text-sm">100+</div>
                            <div className="text-gray-500 text-xs">Hackathons</div>
                        </div>
                        <div className="text-center">
                            <div className="text-indigo-600 font-semibold text-sm">50+</div>
                            <div className="text-gray-500 text-xs">Students Joined</div>
                        </div>
                        <div className="text-center">
                            <div className="text-indigo-600 font-semibold text-sm">10+</div>
                            <div className="text-gray-500 text-xs">Tailored Roadmaps</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserAuth
