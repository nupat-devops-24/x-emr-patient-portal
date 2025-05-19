// src/components/Navbar/Navbar.tsx
import React from 'react';
import './Navbar.css';

interface NavbarProps {
  logoSrc: string;
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, title }) => {
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
      </div>
    </nav>
  );
};

export default Navbar;