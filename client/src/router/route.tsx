import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from '../pages/landing';
import ErrorPage from '../pages/error';
import UserAuth from '../pages/forms/sign-in';
import UserProfile from '../pages/profile';

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/u/auth" element={<UserAuth />} />
                <Route path="/u/:userName" element={<UserProfile />} />
                <Route path="/hackathons" element={<Landing />} />
                <Route path="/teams" element={<Landing />} />
                <Route path="/roadmaps" element={<Landing />} />

                {/* Error page for all unhandled routes */}
                <Route path='*' element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}

export default AppRoutes
