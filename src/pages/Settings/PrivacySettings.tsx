import React from 'react';

const PrivacySettings: React.FC = () => {
  return (
    <div className="settings-card">
      <h2>Privacy Settings</h2>
      <form>
        <label>
          <input type="checkbox" /> Allow family-linked accounts to view my records
        </label>

        <label>
          <input type="checkbox" /> Receive data export link via email
        </label>

        <button type="submit">Save Privacy Settings</button>
      </form>
    </div>
  );
};

export default PrivacySettings;
