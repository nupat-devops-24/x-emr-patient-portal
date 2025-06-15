import React, { useContext, useEffect, useState } from 'react';
import { AppointmentContext } from '../../contexts/AppointmentContext';
import { useNavigate } from 'react-router-dom';
import './NextAppointment.css';

const NextAppointment: React.FC = () => {
  const context = useContext(AppointmentContext);
  const navigate = useNavigate();

  if (!context) return null;

  const { appointment } = context;
 

  const [timeRemaining, setTimeRemaining] = useState<string>("");

  useEffect(() => {
    const appointmentDateTime = new Date(`${appointment.date}T${appointment.time}`);
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = appointmentDateTime.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeRemaining("Appointment time passed");
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        setTimeRemaining(`${days}d ${hours}h ${minutes}m`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [appointment.date, appointment.time]);

  return (
    <div className="next-appointment-page">
      <h1>Next Appointment Details</h1>
      <div className="appointment-card">
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
        <p><strong>Doctor:</strong> {appointment.doctor}</p>
        <p><strong>Department:</strong> {appointment.department}</p>
        <p><strong>Type:</strong> {appointment.type}</p>
        <p>
          <strong>Status:</strong> 
          <span className={`status-badge ${appointment.status.toLowerCase()}`}>
            {appointment.status}
          </span>
        </p>
        <p><strong>Time Remaining:</strong> {timeRemaining}</p>

        {appointment.type === "Telehealth" ? (
          <button className="join-button">Join Video Call</button>
        ) : (
          <button 
            className="reschedule-button" 
            onClick={() => navigate('/reschedule')}
          >
            Reschedule
          </button>
        )}
      </div>
    </div>
  );
};

export default NextAppointment;
