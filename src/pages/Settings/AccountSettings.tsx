import React from 'react';

const AccountSettings: React.FC = () => {
  return (
    <div className="settings-card">
      <h2>Account Settings</h2>
      <form>
        <label>Current Password</label>
        <input type="password" />

        <label>New Password</label>
        <input type="password" />

        <label>Confirm New Password</label>
        <input type="password" />

        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default AccountSettings;
