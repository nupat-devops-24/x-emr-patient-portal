import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './pages/Dashboard/Dashboard';
import Appointments from './pages/Appointments/Appointments';
import Records from './pages/Records/Records';
import Settings from './pages/Settings/Settings';
import Messages from './pages/Messages/Messages';
import Help from './pages/Help/Help';
import NextAppointment from './components/NextAppointment/NextAppointment';
import Reschedule from './pages/Reschedule/Reschedule';
import Login from './pages/Login/Login';  
import { AppointmentProvider } from './contexts/AppointmentContext';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import BodyClassController from './components/BodyClassController';

import './App.css';

// Private route component to protect authenticated routes
const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const App: React.FC = () => {
  return (
    <Router>
      <BodyClassController />
      <AuthProvider>
        <AppointmentProvider>
          <div className="app">
            <Navbar logoSrc="/hospital-svgrepo-com.svg" title="EMR Dashboard" />
            <div className="main-container">
              <Sidebar />
              <main className="content">
                <Routes>
                  {/* Public route */}
                  <Route path="/login" element={<Login />} />

                  {/* Protected routes */}
                  <Route path="/" element={
                    <PrivateRoute><Dashboard /></PrivateRoute>
                  } />
                  <Route path="/appointments" element={
                    <PrivateRoute><Appointments /></PrivateRoute>
                  } />
                  <Route path="/records" element={
                    <PrivateRoute><Records /></PrivateRoute>
                  } />
                  <Route path="/messages" element={
                    <PrivateRoute><Messages /></PrivateRoute>
                  } />
                  <Route path="/settings" element={
                    <PrivateRoute><Settings /></PrivateRoute>
                  } />
                  <Route path="/help" element={
                    <PrivateRoute><Help /></PrivateRoute>
                  } />
                  <Route path="/next-appointment" element={
                    <PrivateRoute><NextAppointment /></PrivateRoute>
                  } />
                  <Route path="/reschedule" element={
                    <PrivateRoute><Reschedule /></PrivateRoute>
                  } />
                </Routes>
              </main>
            </div>
          </div>
        </AppointmentProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
