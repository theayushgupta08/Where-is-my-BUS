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
import PrivateRoute from './components/PrivateRoute';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          {/* Public Routes  */}
          <Route path="/login" element={<Login />} />

          {/* Controls Page  */}
          <Route path="/controls" element={<Controls />} />

          {/* Help Page  */}
          <Route path="/help" element={<Help />} />

          {/* About Us Page  */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Private Routes  */}

          {/* Hero Page (Dashboard)  */}
          <Route path="/" element={<Hero />} />

          {/* Manage Buses  */}
          <Route path="/manage-bus" element={<PrivateRoute> <ManageBuses /> </PrivateRoute>} />
          <Route path="/manage-bus/view" element={<PrivateRoute> <ViewBus /> </PrivateRoute>} />
          <Route path="/manage-bus/add" element={<PrivateRoute> <AddBus /> </PrivateRoute>} />
          <Route path="/manage-bus/update" element={<PrivateRoute> <UpdateBus /> </PrivateRoute>} />
          <Route path="/manage-bus/delete" element={<PrivateRoute> <DeleteBus /> </PrivateRoute>} />

          {/* Manage Drivers  */}
          <Route path="/manage-driver" element={<PrivateRoute> <ManageDrivers /> </PrivateRoute>} />
          <Route path="/manage-driver/view" element={<PrivateRoute> <ViewDriver /> </PrivateRoute>} />
          <Route path="/manage-driver/add" element={<PrivateRoute> <AddDriver /> </PrivateRoute>} />
          <Route path="/manage-driver/update" element={<PrivateRoute> <UpdateDriver /> </PrivateRoute>} />
          <Route path="/manage-driver/delete" element={<PrivateRoute> <DeleteDriver /> </PrivateRoute>} />

          {/* Manage Stops  */}
          <Route path="/manage-stops" element={<PrivateRoute> <ManageStops /> </PrivateRoute>} />
          <Route path="/manage-stops/view" element={<PrivateRoute> <ViewStops /> </PrivateRoute>} />
          <Route path="/manage-stops/add" element={<PrivateRoute> <AddStops /> </PrivateRoute>} />
          <Route path="/manage-stops/delete" element={<PrivateRoute> <DeleteStops /> </PrivateRoute>} />

          {/* Manage Routes  */}
          <Route path="/manage-route" element={<PrivateRoute> <ManageRoutes /> </PrivateRoute>} />
          <Route path="/manage-route/view" element={<PrivateRoute> <ViewRoute /> </PrivateRoute>} />
          <Route path="/manage-route/add" element={<PrivateRoute> <AddRoute /> </PrivateRoute>} />
          <Route path="/manage-route/update" element={<PrivateRoute> <UpdateRoute /> </PrivateRoute>} />
          <Route path="/manage-route/delete" element={<PrivateRoute> <DeleteRoute /> </PrivateRoute>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;