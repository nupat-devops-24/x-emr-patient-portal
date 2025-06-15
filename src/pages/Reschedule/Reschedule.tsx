import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppointmentContext } from '../../contexts/AppointmentContext';
import './Reschedule.css';

const Reschedule: React.FC = () => {
  const [newDate, setNewDate] = useState('');
  const [newTime, setNewTime] = useState('');
  const navigate = useNavigate();

  const context = useContext(AppointmentContext);
  if (!context) return null; // or handle no context case

  const { appointment, setAppointment } = context;

  const handleReschedule = (e: React.FormEvent) => {
    e.preventDefault();
    // Update the appointment context state
    setAppointment({
      ...appointment,
      date: newDate,
      time: newTime,
    });
    alert(`Appointment rescheduled to ${newDate} at ${newTime}`);
    navigate('/next-appointment');
  };

  return (
    <div className="reschedule-page">
      <h1>Reschedule Appointment</h1>
      <form onSubmit={handleReschedule} className="reschedule-form">
        <label>
          New Date:
          <input
            type="date"
            value={newDate}
            onChange={(e) => setNewDate(e.target.value)}
            required
          />
        </label>
        <label>
          New Time:
          <input
            type="time"
            value={newTime}
            onChange={(e) => setNewTime(e.target.value)}
            required
          />
        </label>
        <button type="submit" className="confirm-button">Confirm Reschedule</button>
      </form>
    </div>
  );
};

export default Reschedule;
