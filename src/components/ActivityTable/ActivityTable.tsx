// src/components/ActivityTable/ActivityTable.tsx
import React from 'react';
import './ActivityTable.css';

interface Activity {
  activity: string;
  totalHours: string;
  percentage: string;
}

interface ActivityTableProps {
  activities: Activity[];
}

const ActivityTable: React.FC<ActivityTableProps> = ({ activities }) => {
  return (
    <div className="table-section">
      <h2>Recent Activity</h2>
      <table>
        <thead>
          <tr>
            <th>Activity</th>
            <th>Total (H)</th>
            <th>Percentage</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity, index) => (
            <tr key={index}>
              <td>{activity.activity}</td>
              <td>{activity.totalHours}</td>
              <td>{activity.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ActivityTable;