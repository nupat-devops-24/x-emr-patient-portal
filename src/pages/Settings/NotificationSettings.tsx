import React from 'react';

const NotificationSettings: React.FC = () => {
  return (
    <div className="settings-card">
      <h2>Notification Preferences</h2>
      <form>
        <label>
          <input type="checkbox" /> Appointment Reminders (Email)
        </label>

        <label>
          <input type="checkbox" /> Lab Result Alerts (SMS)
        </label>

        <label>
          <input type="checkbox" /> Messages from Care Provider
        </label>

        <button type="submit">Update Preferences</button>
      </form>
    </div>
  );
};

export default NotificationSettings;
