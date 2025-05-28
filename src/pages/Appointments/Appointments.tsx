// src/pages/Appointments/Appointments.tsx
import React from 'react';
import NextAppointment from '../../components/NextAppointment/NextAppointment';
import './Appointments.css';

const Appointments: React.FC = () => {
  return (
    <div className="appointments-page">
      <h1>Appointments</h1>
      
      {/* Show next appointment here */}
      <NextAppointment />
      
      {/* Your appointment list or form */}
      <p>Here will be your appointments list...</p>
    </div>
  );
};

export default Appointments;
