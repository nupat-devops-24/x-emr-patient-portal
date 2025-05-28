// src/pages/Dashboard/Dashboard.tsx
import React from 'react';
import Widget from '../../components/Widget/Widget';
import ActivityTable from '../../components/ActivityTable/ActivityTable';
import './Dashboard.css';
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection';

const activities = [
    { activity: 'Consultation', totalHours: '2.5', percentage: '62.5%' },
    { activity: 'Lab Tests', totalHours: '1.0', percentage: '25%' },
    { activity: 'Follow-up', totalHours: '0.5', percentage: '12.5%' },
];

const Dashboard: React.FC = () => {
    return (
        <div className="dashboard">
             <WelcomeSection /> 
            <h1>Patient Dashboard</h1>
            <div className="widgets">
                <Widget title="Upcoming Appointments" value="3" />
                <Widget title="Pending Records" value="5" />
                <Widget title="Total Visits" value="$120" />
            </div>
            <ActivityTable activities={activities} />
        </div>
    );
};

export default Dashboard;