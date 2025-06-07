import React from 'react';
import './Messages.css';

const messages = [
  "New lab results available.",
  "Prescription refill reminder.",
  "Appointment has been confirmed."
];

const Messages: React.FC = () => {
  return (
    <div className="messages-page">
      <h1>Messages / Notifications</h1>
      <ul className="message-list">
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
