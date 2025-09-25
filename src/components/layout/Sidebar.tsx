import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Home,
  Calendar,
  FolderOpen,
  MessageSquare,
  HelpCircle,
  Settings
} from 'lucide-react';

const navItems = [
  { label: 'Dashboard', path: '/', icon: Home, color: 'text-blue-300' },
  { label: 'Appointments', path: '/appointments', icon: Calendar, color: 'text-pink-300' },
  { label: 'Records', path: '/records', icon: FolderOpen, color: 'text-yellow-300' },
  { label: 'Messages', path: '/messages', icon: MessageSquare, color: 'text-green-300' },
  { label: 'Help', path: '/help', icon: HelpCircle, color: 'text-teal-300' },
  { label: 'Settings', path: '/settings', icon: Settings, color: 'text-red-300' },
];

const Sidebar = () => {
  return (
    <aside className="w-64 bg-indigo-800 text-white min-h-screen shadow-md">
      <div className="p-6 text-2xl font-bold text-purple-300 border-b border-indigo-700">
        EMR Patient Portal
      </div>
      <nav className="px-4 py-6 space-y-2">
        {navItems.map(({ label, path, icon: Icon, color }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-4 py-3 rounded-xl transition duration-200 group ${
                isActive
                  ? 'bg-purple-700 text-white shadow-md'
                  : 'hover:bg-indigo-700 text-purple-200'
              }`
            }
          >
          <Icon
            stroke="currentColor"
            style={{ color: '#60a5fa' }} // Tailwind blue-400 hex code
            className="w-5 h-5"
            strokeWidth={2}
          />

            <span className="text-sm font-medium">{label}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
