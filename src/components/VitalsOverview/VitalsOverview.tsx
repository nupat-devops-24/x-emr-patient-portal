import React from 'react';
import './VitalsOverview.css';

interface VitalsOverviewProps {
  bp: string;
  hr: string;
  temp: string;
}

const VitalsOverview: React.FC<VitalsOverviewProps> = ({ bp, hr, temp }) => {
  return (
    <div className="vitals-overview card">
      <h2>Vitals Overview</h2>
      <div className="vitals-items">
        <div className="vital-item">
          <span>Blood Pressure</span>
          <strong>{bp}</strong>
        </div>
        <div className="vital-item">
          <span>Heart Rate</span>
          <strong>{hr}</strong>
        </div>
        <div className="vital-item">
          <span>Temperature</span>
          <strong>{temp}</strong>
        </div>
      </div>
    </div>
  );
};

export default VitalsOverview;
