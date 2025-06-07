import React from 'react';

const LabResults: React.FC = () => {
  const results = [
    { date: '2024-04-10', test: 'Blood Sugar', result: 'Normal' },
    { date: '2024-01-28', test: 'Cholesterol', result: 'Slightly Elevated' }
  ];

  return (
    <div className="lab-results card">
      <h2>Lab Results</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Test</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {results.map((test, index) => (
            <tr key={index}>
              <td>{test.date}</td>
              <td>{test.test}</td>
              <td>{test.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LabResults;
