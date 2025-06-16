// src/pages/Dashboard/Dashboard.tsx
import React from 'react'; // Importing the React library for creating components
import Widget from '../../components/Widget/Widget'; // Importing the Widget component
import ActivityTable from '../../components/ActivityTable/ActivityTable'; // Importing the ActivityTable component
import './Dashboard.css'; // Importing the CSS file for styling this component
import WelcomeSection from '../../components/WelcomeSection/WelcomeSection'; // Importing the WelcomeSection component

// Sample data for activities, each entry contains activity name, total hours, and percentage
const activities = [
    { activity: 'Consultation', totalHours: '2.5', percentage: '62.5%' },
    { activity: 'Lab Tests', totalHours: '1.0', percentage: '25%' },
    { activity: 'Follow-up', totalHours: '0.5', percentage: '12.5%' },
];

// Dashboard component definition
const Dashboard: React.FC = () => {
    return (
        // Main container for the dashboard with a CSS class 'dashboard'
        <div className="dashboard">
             {/* Rendering the WelcomeSection component */}
             <WelcomeSection /> 
            {/* Heading for the dashboard */}
            <h1>Patient Dashboard</h1>
            {/* Container for widgets with a CSS class 'widgets' */}
            <div className="widgets">
                {/* Rendering Widget components with different titles and values */}
                <Widget title="Upcoming Appointments" value="3" />
                <Widget title="Pending Records" value="5" />
                <Widget title="Total Visits" value="$120" />
            </div>
            {/* Rendering the ActivityTable component and passing the 'activities' data as a prop */}
            <ActivityTable activities={activities} />
        </div>
    );
};

export default Dashboard; // Exporting the Dashboard component to be used in other parts of the application
