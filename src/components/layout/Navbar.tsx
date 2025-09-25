import React from 'react';
import { Bell, UserCircle } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <header className="bg-white border-b px-6 py-4 flex justify-between items-center shadow-sm">
      <div className="text-xl font-bold text-gray-800">EMR Patient Portal</div>

      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 text-gray-500 cursor-pointer" />
        <UserCircle className="w-8 h-8 text-gray-600" />

        {isAuthenticated && (
          <button
            onClick={logout}
            className="ml-4 bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-1.5 rounded transition"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Navbar;
