import React, { useState } from 'react';
import NextAppointment from '../../components/NextAppointment/NextAppointment';
import './Appointments.css';

const Appointments: React.FC = () => {
  // Form state
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    doctor: '',
    department: '',
    type: '',
  });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.date || !formData.time || !formData.doctor || !formData.department || !formData.type) {
      alert('Please fill in all fields.');
      return;
    }

    // For now just log the form data
    console.log('New Appointment:', formData);

    // Clear the form after submit
    setFormData({
      date: '',
      time: '',
      doctor: '',
      department: '',
      type: '',
    });

    alert('Appointment scheduled! (Not saved anywhere yet)');
  };

  return (
    <div className="appointments-page">
      <h1>Appointments</h1>

      {/* Show next appointment here */}
      <NextAppointment />

      {/* Appointment scheduling form */}
      <section className="appointment-form">
        <h2>Schedule a New Appointment</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Date:
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Time:
            <input 
              type="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Doctor:
            <input 
              type="text" 
              name="doctor" 
              placeholder="Doctor's name"
              value={formData.doctor} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Department:
            <input 
              type="text" 
              name="department" 
              placeholder="Department"
              value={formData.department} 
              onChange={handleChange} 
            />
          </label>

          <label>
            Type:
            <select name="type" value={formData.type} onChange={handleChange}>
              <option value="">Select type</option>
              <option value="Consultation">Consultation</option>
              <option value="Follow-up">Follow-up</option>
              <option value="Telehealth">Telehealth</option>
              <option value="Emergency">Emergency</option>
            </select>
          </label>

          <button type="submit">Schedule Appointment</button>
        </form>
      </section>
    </div>
  );
};

export default Appointments;
