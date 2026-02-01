import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {
  Navbar,
  Hero,
  ManageBuses,
  ManageDrivers,
  ManageRoutes,
  ManageStops,
  ViewStops,
  DeleteStops,
  AddStops,
  ViewBus,
  AddBus,
  UpdateBus,
  DeleteBus,
  ViewDriver,
  AddDriver,
  UpdateDriver,
  DeleteDriver,
  ViewRoute,
  AddRoute,
  UpdateRoute,
  DeleteRoute
} from './components';

import Controls from './components/Controls';
import Help from './components/Help';
import AboutUs from './components/AboutUs';
import Login from './components/Login';
import PrivateRoute, { AdminRoute } from './components/PrivateRoute';
import LandingPage from './components/LandingPage';
import Attendance from './components/Attendance';
import Profile from './components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          {/* Public Routes  */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />

          {/* Controls Page  */}
          <Route path="/controls" element={<Controls />} />

          {/* Help Page  */}
          <Route path="/help" element={<Help />} />

          {/* About Us Page  */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Private Routes  */}

          {/* Hero Page (Dashboard)  */}
          <Route path="/dashboard" element={<PrivateRoute><Hero /></PrivateRoute>} />

          {/* Profile Route */}
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />

          {/* Driver Routes */}
          <Route path="/driver/attendance" element={<PrivateRoute><Attendance /></PrivateRoute>} />

          {/* Manage Buses - Admin Only  */}
          <Route path="/manage-bus" element={<AdminRoute> <ManageBuses /> </AdminRoute>} />
          <Route path="/manage-bus/view" element={<AdminRoute> <ViewBus /> </AdminRoute>} />
          <Route path="/manage-bus/add" element={<AdminRoute> <AddBus /> </AdminRoute>} />
          <Route path="/manage-bus/update" element={<AdminRoute> <UpdateBus /> </AdminRoute>} />
          <Route path="/manage-bus/delete" element={<AdminRoute> <DeleteBus /> </AdminRoute>} />

          {/* Manage Drivers - Admin Only  */}
          <Route path="/manage-driver" element={<AdminRoute> <ManageDrivers /> </AdminRoute>} />
          <Route path="/manage-driver/view" element={<AdminRoute> <ViewDriver /> </AdminRoute>} />
          <Route path="/manage-driver/add" element={<AdminRoute> <AddDriver /> </AdminRoute>} />
          <Route path="/manage-driver/update" element={<AdminRoute> <UpdateDriver /> </AdminRoute>} />
          <Route path="/manage-driver/delete" element={<AdminRoute> <DeleteDriver /> </AdminRoute>} />

          {/* Manage Stops - Admin Only  */}
          <Route path="/manage-stops" element={<AdminRoute> <ManageStops /> </AdminRoute>} />
          <Route path="/manage-stops/view" element={<AdminRoute> <ViewStops /> </AdminRoute>} />
          <Route path="/manage-stops/add" element={<AdminRoute> <AddStops /> </AdminRoute>} />
          <Route path="/manage-stops/delete" element={<AdminRoute> <DeleteStops /> </AdminRoute>} />

          {/* Manage Routes - Admin Only  */}
          <Route path="/manage-route" element={<AdminRoute> <ManageRoutes /> </AdminRoute>} />
          <Route path="/manage-route/view" element={<AdminRoute> <ViewRoute /> </AdminRoute>} />
          <Route path="/manage-route/add" element={<AdminRoute> <AddRoute /> </AdminRoute>} />
          <Route path="/manage-route/update" element={<AdminRoute> <UpdateRoute /> </AdminRoute>} />
          <Route path="/manage-route/delete" element={<AdminRoute> <DeleteRoute /> </AdminRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;