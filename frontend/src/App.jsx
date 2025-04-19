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

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0">
        <Navbar />
        <Routes>
          {/* Hero Page (Dashboard)  */}
          <Route path="/" element={<Hero />} />

          {/* Controls Page  */}
          <Route path="/controls" element={<Controls />} />

          {/* Help Page  */}
          <Route path="/help" element={<Help />} />

          {/* About Us Page  */}
          <Route path="/about-us" element={<AboutUs />} />

          {/* Manage Buses  */}
          <Route path="/manage-bus" element={<ManageBuses />} />
          <Route path="/manage-bus/view" element={<ViewBus />} />
          <Route path="/manage-bus/add" element={<AddBus />} />
          <Route path="/manage-bus/update" element={<UpdateBus />} />
          <Route path="/manage-bus/delete" element={<DeleteBus />} />

          {/* Manage Drivers  */}
          <Route path="/manage-driver" element={<ManageDrivers />} />
          <Route path="/manage-driver/view" element={<ViewDriver />} />
          <Route path="/manage-driver/add" element={<AddDriver />} />
          <Route path="/manage-driver/update" element={<UpdateDriver />} />
          <Route path="/manage-driver/delete" element={<DeleteDriver />} />

          {/* Manage Stops  */}
          <Route path="/manage-stops" element={<ManageStops />} />
          <Route path="/manage-stops/view" element={<ViewStops />} />
          <Route path="/manage-stops/add" element={<AddStops />} />
          <Route path="/manage-stops/delete" element={<DeleteStops />} />

          {/* Manage Routes  */}
          <Route path="/manage-route" element={<ManageRoutes />} />
          <Route path="/manage-route/view" element={<ViewRoute />} />
          <Route path="/manage-route/add" element={<AddRoute />} />
          <Route path="/manage-route/update" element={<UpdateRoute />} />
          <Route path="/manage-route/delete" element={<DeleteRoute />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;