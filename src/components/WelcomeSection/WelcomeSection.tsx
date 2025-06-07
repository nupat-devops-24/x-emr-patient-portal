import React from 'react';
import './WelcomeSection.css';

const patientName = "to your patient portal"; // You could later make this dynamic from user data or props

const healthTips = [
  "Stay hydrated today!",
  "Remember to take deep breaths and stretch.",
  "A short walk can boost your mood!",
  "Eat something green today 🌿.",
];

const randomTip = healthTips[Math.floor(Math.random() * healthTips.length)];

const WelcomeSection: React.FC = () => {
  return (
    <div className="welcome-section">
      <h1>Welcome {patientName}!</h1>
      <p className="health-tip">{randomTip}</p>
    </div>
  );
};

export default WelcomeSection;
