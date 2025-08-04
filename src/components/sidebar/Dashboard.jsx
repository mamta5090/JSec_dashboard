import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import {
  LayoutDashboard, FileText, ShieldCheck, Activity,
  Lock, Settings, LogOut, Plus
} from 'lucide-react';

const data = [
  { month: '01-2025', requests: 300 },
  { month: '02-2025', requests: 250 },
  { month: '03-2025', requests: 200 },
  { month: '04-2025', requests: 20 },
  { month: '05-2025', requests: 300 },
  { month: '06-2025', requests: 400 },
  { month: '07-2025', requests: 220 },
  { month: '08-2025', requests: 250 },
  { month: '09-2025', requests: 140 },
  { month: '10-2025', requests: 230 },
  { month: '11-2025', requests: 410 },
  { month: '12-2025', requests: 90 },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-[#0D0D0D] text-white">
      {/* Sidebar */}
      <aside className="w-16 bg-[#1a1a1a] flex flex-col items-center py-4 space-y-6">
        <LayoutDashboard size={22} />
        <FileText size={22} />
        <ShieldCheck size={22} />
        <Activity size={22} />
        <Lock size={22} />
        <Settings size={22} />
        <LogOut size={22} />
      </aside>

      {/* Main content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-semibold">Welcome Back, <span className="text-gray-400">Nitish</span></h1>
            <p className="text-sm text-gray-500">Here’s an overview of the latest activity</p>
          </div>
          <button className="flex items-center bg-purple-600 hover:bg-purple-700 transition px-4 py-2 rounded text-sm">
            <Plus className="mr-2" size={18} />
            New API
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {/* Total */}
          <div className="bg-[#161616] p-4 rounded shadow">
            <p className="text-sm text-gray-400 mb-1">Total Request</p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold">276</h2>
              <span className="text-green-400 text-xs">+40%</span>
            </div>
          </div>

          {/* Successful */}
          <div className="bg-[#161616] p-4 rounded shadow">
            <p className="text-sm text-gray-400 mb-1">Successful Request</p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-green-400">156</h2>
              <span className="text-green-400 text-xs">+40%</span>
            </div>
          </div>

          {/* Failed */}
          <div className="bg-[#161616] p-4 rounded shadow">
            <p className="text-sm text-gray-400 mb-1">Failed Request</p>
            <div className="flex justify-between items-end">
              <h2 className="text-4xl font-bold text-red-400">120</h2>
              <span className="text-red-400 text-xs">+40%</span>
            </div>
          </div>
        </div>

        {/* Request Overview Chart */}
        <div className="bg-[#161616] p-6 rounded shadow">
          <div className="flex justify-between mb-4">
            <h3 className="text-lg font-semibold">Request Overview</h3>
            <select className="bg-[#1a1a1a] text-gray-400 text-sm px-2 py-1 rounded">
              <option>Yearly (2025)</option>
              <option>Monthly</option>
            </select>
          </div>

        
        </div>
      </main>
    </div>
  );
}