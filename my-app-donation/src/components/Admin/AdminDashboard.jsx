import React, { useState } from 'react';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="bg-gradient-to-r from-purple-700 via-purple-800 to-indigo-900 p-6 rounded-2xl text-white shadow-lg">
      {/* Heading */}
      <div className="mb-4">
        <h2 className="text-2xl font-bold">Donations Management</h2>
        <p className="text-sm text-white/80">Review and manage all donations</p>
      </div>

      {/* Search + Filters */}
      <div className="flex flex-col md:flex-row md:items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Search by name, mobile, or ID..."
          className="w-full md:w-1/2 px-4 py-2 rounded-md bg-white/10 text-white placeholder-white/60 border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
        />
        <select
          className="px-4 py-2 rounded-lg bg-white/10 backdrop-blur-sm text-white border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/30 appearance-none"
        >
          <option className="bg-purple-700 text-white rounded-3xl">All Status</option>
          <option className="bg-purple-700 text-white rounded-3xl">Verified</option>
          <option className="bg-purple-700 text-white rounded-3xl">Pending</option>
        </select>
       
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-white">
        <div className="rounded-lg border border-blue-500 bg-gradient-to-br from-blue-900 to-transparent p-4">
          <p className="text-sm text-white/70 mb-1">Total Donations</p>
          <p className="text-3xl font-semibold text-blue-400">1</p>
        </div>
        <div className="rounded-lg border border-green-500 bg-gradient-to-br from-green-900 to-transparent p-4">
          <p className="text-sm text-white/70 mb-1">Verified</p>
          <p className="text-3xl font-semibold text-green-400">0</p>
        </div>
        <div className="rounded-lg border border-pink-500 bg-gradient-to-br from-pink-900 to-transparent p-4">
          <p className="text-sm text-white/70 mb-1">Total Amount (Verified)</p>
          <p className="text-3xl font-semibold text-pink-300">₹0</p>
        </div>
      </div>

      <div className='backdrop-blur-16xl background-color: rgba(255, 255, 255, 0.75); border-2 border-white  h-30 w-50 '>
        {/* DONARS */}
        
      </div>
    </div>
  );
};

export default AdminDashboard;
