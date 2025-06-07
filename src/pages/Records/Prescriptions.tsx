import React from 'react';

const Prescriptions: React.FC = () => {
  const prescriptions = [
    { date: '2024-05-20', medication: 'Amoxicillin', dosage: '500mg, twice daily', doctor: 'Dr. Williams' },
    { date: '2024-02-12', medication: 'Lisinopril', dosage: '10mg, once daily', doctor: 'Dr. Ade' }
  ];

  return (
    <div className="prescriptions card">
      <h2>Prescriptions</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Medication</th>
            <th>Dosage</th>
            <th>Doctor</th>
          </tr>
        </thead>
        <tbody>
          {prescriptions.map((pres, index) => (
            <tr key={index}>
              <td>{pres.date}</td>
              <td>{pres.medication}</td>
              <td>{pres.dosage}</td>
              <td>{pres.doctor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prescriptions;
