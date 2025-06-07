// src/pages/Settings/Settings.tsx
import React from 'react';
import ProfileSettings from './ProfileSettings';
import AccountSettings from './AccountSettings';
import NotificationSettings from './NotificationSettings';
import PrivacySettings from './PrivacySettings';
import './Settings.css';

const Settings: React.FC = () => {
  return (
    <div className="settings-page">
      <h1>Account Settings</h1>
      <ProfileSettings />
      <AccountSettings />
      <NotificationSettings />
      <PrivacySettings />
    </div>
  );
};

export default Settings;
