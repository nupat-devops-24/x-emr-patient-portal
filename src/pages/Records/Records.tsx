import React from 'react';
import MedicalSummary from './MedicalSummary';
import VisitHistory from './VisitHistory';
import LabResults from './LabResults';
import Prescriptions from './Prescriptions';
import VitalsHistory from './VitalsHistory';
import './Records.css';

const Records: React.FC = () => {
  return (
    <div className="records-page">
      <h1>Medical Records</h1>
      <MedicalSummary />
      <VisitHistory />
      <LabResults />
      <Prescriptions />
      <VitalsHistory />
    </div>
  );
};

export default Records;
