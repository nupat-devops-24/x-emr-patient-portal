import React, { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Navbar.css';
import { useAuth } from '../../contexts/AuthContext';

interface NavbarProps {
  logoSrc: string;
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, title }) => {
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const calendarRef = useRef<HTMLDivElement>(null);

  // Get auth state and actions from context
  const { isAuthenticated, login, logout } = useAuth();

  const toggleCalendar = () => setIsCalendarOpen(!isCalendarOpen);

  const onDateChange = (date: Date | Date[]) => {
    if (Array.isArray(date)) {
      setSelectedDate(date[0]);
    } else {
      setSelectedDate(date);
    }
  };

  const handleAuthClick = () => {
    if (isAuthenticated) {
      logout();
    } else {
      login();
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (calendarRef.current && !calendarRef.current.contains(event.target as Node)) {
        setIsCalendarOpen(false);
      }
    }

    if (isCalendarOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isCalendarOpen]);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={logoSrc} alt="Logo" className="logo" />
        <span>{title}</span>
      </div>
      <div className="navbar-actions">
        <button className="filter-btn">Filter by</button>
        
        <div className="calendar-dropdown" ref={calendarRef} style={{ position: 'relative' }}>
          <button
            className="calendar-btn"
            onClick={toggleCalendar}
            aria-expanded={isCalendarOpen}
            aria-haspopup="true"
          >
            Calendar
          </button>

          {isCalendarOpen && (
            <div
              className="calendar-popup"
              style={{
                position: 'absolute',
                top: '100%',
                right: 0,
                zIndex: 1000,
                backgroundColor: 'white',
                border: '1px solid #ccc',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                padding: '10px',
              }}
            >
              <Calendar
                onChange={onDateChange}
                value={selectedDate || new Date()}
                minDetail="month"
                maxDetail="month"
              />
              <p style={{ marginTop: '8px', textAlign: 'center' }}>
                Selected date: {selectedDate ? selectedDate.toDateString() : 'None'}
              </p>
            </div>
          )}
        </div>

        <button className="export-btn">Export</button>

        <div className="user-profile">
          <img src="/vite.svg" alt="User" className="user-avatar" />
        </div>

        <button className="auth-button" onClick={handleAuthClick}>
          {isAuthenticated ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
