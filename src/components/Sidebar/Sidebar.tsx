// src/components/Sidebar/Sidebar.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar: React.FC = () => {
    const location = useLocation();

    return (
        <aside className="sidebar">
            <h2 className="sidebar-title">EMR</h2>
            <ul className="sidebar-menu">
                <li className={`sidebar-item ${location.pathname === '/' ? 'active' : ''}`}>
                    <Link to="/">Dashboard</Link>
                </li>
                <li className={`sidebar-item ${location.pathname === '/appointments' ? 'active' : ''}`}>
                    <Link to="/appointments">Appointments</Link>
                </li>
                <li className={`sidebar-item ${location.pathname === '/records' ? 'active' : ''}`}>
                    <Link to="/records">Medical-Records</Link>
                </li>

                <li className={`sidebar-item ${location.pathname === '/messages' ? 'active' : ''}`}>
                    <Link to="/messages">Messages</Link>
                </li>               
                
                <li className={`sidebar-item ${location.pathname === '/help' ? 'active' : ''}`}>
                    <Link to="/help">Help</Link>
                </li> 

                <li className={`sidebar-item ${location.pathname === '/settings' ? 'active' : ''}`}>
                    <Link to="/settings">Settings</Link>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;