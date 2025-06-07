import React from 'react';

const VisitHistory: React.FC = () => {
  const visits = [
    { date: '2024-05-20', reason: 'General Checkup', doctor: 'Dr. Williams', notes: 'All clear' },
    { date: '2024-02-12', reason: 'Follow-up', doctor: 'Dr. Ade', notes: 'Blood pressure stable' }
  ];

  return (
    <div className="visit-history card">
      <h2>Visit History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Reason</th>
            <th>Doctor</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {visits.map((visit, index) => (
            <tr key={index}>
              <td>{visit.date}</td>
              <td>{visit.reason}</td>
              <td>{visit.doctor}</td>
              <td>{visit.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VisitHistory;
