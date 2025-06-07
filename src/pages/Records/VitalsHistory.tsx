import React from 'react';


const VitalsHistory: React.FC = () => {
  const vitals = [
    { date: '2024-05-20', bp: '120/80', heartRate: '72 bpm', weight: '75 kg' },
    { date: '2024-02-12', bp: '130/85', heartRate: '76 bpm', weight: '76 kg' }
  ];

  return (
    <div className="vitals-history card">
      <h2>Vitals History</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Blood Pressure</th>
            <th>Heart Rate</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {vitals.map((vital, index) => (
            <tr key={index}>
              <td>{vital.date}</td>
              <td>{vital.bp}</td>
              <td>{vital.heartRate}</td>
              <td>{vital.weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VitalsHistory;
