import React from 'react';
import {  Routes, Route, Navigate } from 'react-router-dom';
import DashBoard from './DashBoard';
import Cameras from './Cameras';
import Customers from './Customers';
import Sites from './Sites';



const AppRoutes = () => {
    return (
            <Routes>
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/cameras/*" element={<Cameras />} />
            <Route path="/customers/*" element={<Customers />} />
            <Route path="/sites/*" element={<Sites />} />

            <Route path="*" element={<Navigate to="/dashboard" />} />
            </Routes>
    );
};

export default AppRoutes;
