import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // For navigation
import './Navbar.css';

interface NavbarProps {
  logoSrc: string;
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, title }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleAuthClick = () => {
    if (isLoggedIn) {
      // Logout logic
      setIsLoggedIn(false);
      // Optional: navigate to login or home page
      navigate('/login');
    } else {
      // Navigate to login page
      navigate('/login');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logoSrc} alt="Logo" className="logo" />
        <span>{title}</span>
      </div>
      <div className="navbar-actions">
        <button className="filter-btn">Filter by</button>
        <button className="calendar-btn">Calendar</button>
        <button className="export-btn">Export</button>
        <div className="user-profile">
          <img src="/vite.svg" alt="User" className="user-avatar" />
        </div>
        <button className="auth-button" onClick={handleAuthClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
