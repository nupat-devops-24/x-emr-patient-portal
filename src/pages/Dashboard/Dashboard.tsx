import React from "react";

const Dashboard = () => {
  return (
    <div className="p-8">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-4xl font-extrabold tracking-wide">Welcome back 👋</h2>
          <p className="text-gray-500 mt-1">Stay hydrated today!</p>
        </div>
        <div className="text-3xl space-x-6">
          <span className="cursor-pointer hover:text-gray-600 transition">🔔</span>
        </div>
      </header>

      {/* Profile Card */}
      <section className="bg-gradient-to-r from-purple-700 to-indigo-700 p-6 rounded-3xl shadow-lg flex items-center gap-6 mb-10 border border-purple-400/50">
        <img
          src="https://i.pravatar.cc/100"
          alt="Profile"
          className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-xl"
        />
        <div className="flex-1">
          <h3 className="text-3xl font-bold mb-2">Mariam Temitope</h3>
          <p className="text-purple-200 text-lg mb-1">
            Blood Group: <span className="text-white">B+</span>
          </p>
          <p className="text-purple-200 text-lg">Email: <span className="text-white">mariam@gmail.com</span></p>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-10">
        <div className="bg-purple-800 p-6 rounded-2xl shadow-lg text-center">
          <h4 className="text-lg font-semibold mb-2">Appointments</h4>
          <p className="text-4xl font-bold">3</p>
        </div>
        <div className="bg-yellow-700 p-6 rounded-2xl shadow-lg text-center">
          <h4 className="text-lg font-semibold mb-2">Pending Records</h4>
          <p className="text-4xl font-bold">5</p>
        </div>
        <div className="bg-green-700 p-6 rounded-2xl shadow-lg text-center">
          <h4 className="text-lg font-semibold mb-2">Total Visits</h4>
          <p className="text-4xl font-bold">10</p>
        </div>
      </section>

      {/* Recent Activity Table */}
      <section className="bg-indigo-800 bg-opacity-40 p-6 rounded-2xl shadow-lg max-w-4xl mx-auto">
        <h4 className="text-xl font-bold mb-4">Recent Activity</h4>
        <table className="w-full text-left text-purple-200">
          <thead className="border-b border-purple-400/50 text-purple-300">
            <tr>
              <th className="py-2 px-3">Activity</th>
              <th className="py-2 px-3">Total (H)</th>
              <th className="py-2 px-3">Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-purple-400/30">
              <td className="py-2 px-3">Consultation</td>
              <td className="py-2 px-3">2.5</td>
              <td className="py-2 px-3">50%</td>
            </tr>
            <tr className="border-b border-purple-400/30">
              <td className="py-2 px-3">Lab Tests</td>
              <td className="py-2 px-3">1.0</td>
              <td className="py-2 px-3">20%</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard;
