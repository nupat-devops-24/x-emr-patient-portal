import React from 'react';

const MedicalSummary: React.FC = () => {
  const summary = {
    bloodGroup: 'A+',
    allergies: 'Penicillin',
    chronicIllnesses: 'Hypertension',
    medications: 'Lisinopril',
    immunizations: 'Tetanus, COVID-19'
  };

  return (
    <div className="medical-summary card">
      <h2>Medical Summary</h2>
      <ul>
        <li><span>Blood Group:</span> {summary.bloodGroup}</li>
        <li><span>Allergies:</span> {summary.allergies}</li>
        <li><span>Chronic Illnesses:</span> {summary.chronicIllnesses}</li>
        <li><span>Medications:</span> {summary.medications}</li>
        <li><span>Immunizations:</span> {summary.immunizations}</li>
      </ul>
    </div>
  );
};

export default MedicalSummary;
