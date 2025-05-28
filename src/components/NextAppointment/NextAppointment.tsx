import "./NextAppointment.css";

const appointment = {
  date: "2025-06-02",
  time: "10:30 AM",
  doctor: "Dr. Sarah Connor",
  department: "Cardiology",
  type: "Telehealth",
};

const NextAppointment = () => {
  return (
    <div className="next-appointment">
      <h2>Next Appointment</h2>
      <div className="appointment-details">
        <p><strong>Date:</strong> {appointment.date}</p>
        <p><strong>Time:</strong> {appointment.time}</p>
        <p><strong>Doctor:</strong> {appointment.doctor}</p>
        <p><strong>Department:</strong> {appointment.department}</p>
        <p><strong>Type:</strong> {appointment.type}</p>
      </div>
    </div>
  );
};

export default NextAppointment;
