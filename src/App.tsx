import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import { AppointmentProvider } from './context/AppointmentContext';
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <AppointmentProvider>
      <div className="app">
        <Navbar logoSrc="/hospital-svgrepo-com.svg" title="EMR Dashboard" />
        <div className="main-container">
          <Sidebar />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/appointments" element={<Appointments />} />
              <Route path="/records" element={<Records />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/next-appointment" element={<NextAppointment />} />
              <Route path="/reschedule" element={<Reschedule />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
        </div>
      </div>
      </AppointmentProvider>
    </Router>
  );
};

export default App;
