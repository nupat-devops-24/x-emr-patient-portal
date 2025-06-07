import React from 'react';

const ProfileSettings: React.FC = () => {
  return (
    <div className="settings-card">
      <h2>Profile Information</h2>
      <form>
        <label>Full Name</label>
        <input type="text" placeholder="John Doe" />

        <label>Email</label>
        <input type="email" placeholder="john@example.com" />

        <label>Phone Number</label>
        <input type="tel" placeholder="+234 123 456 7890" />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default ProfileSettings;
