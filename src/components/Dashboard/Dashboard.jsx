import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
} from 'recharts';
import {
  LayoutDashboard, FileText, ShieldCheck, Activity,
  Lock, Settings, LogOut, Plus
} from 'lucide-react';
import { BsWifiOff } from "react-icons/bs";
import { IoIosNotificationsOff } from "react-icons/io";
import { CgProfile } from "react-icons/cg";



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
    <>
      {/* Top Navbar */}
      <div className="top-0 left-0 w-full h-10 bg-[#0D0D0D] z-50 flex items-center px-6 shadow-md space-x-270">
        <h1 className="text-white text-xl font-semibold ml-10">Dashboard</h1>
      <div className='flex flex-row space-x-5 h-5 '>
          <IoIosNotificationsOff className='bg-gray-700 rounded-4xl h-8 w-8'/>
        <CgProfile className='bg-gray-700 rounded-4xl h-8 w-8'/>
        <div className=''>
          <h1 className='text-white'>Nitish Khanna</h1>
          <p className='text-white'>Manager</p>
        </div>
      </div>
      </div>

      {/* Dashboard layout */}
      <div className="flex min-h-screen bg-[#0D0D0D] text-white pt-5">
        {/* Sidebar */}
        <aside className="w-12 bg-[#1a1a1a] flex flex-col items-center py-4 space-y-6 fixed top-7 left-0 h-full z-40 pt-50">
          <LayoutDashboard size={22} />
          <FileText size={22} />
          <ShieldCheck size={22} />
          <Activity size={22} />
          <Lock size={22} />
          <Settings size={22} />
         <BsWifiOff size={22}/>
        </aside>

        {/* Main content */}
        <main className="flex-1 pl-16 p-6">
          {/* Top greeting */}
          <div className="flex justify-between items-center mb-2">
            <div>
              <h1 className="text-3xl font-semibold">
                Welcome Back, <span className="text-gray-400">Nitish</span>
              </h1>
              <p className="text-sm text-gray-500">Here’s an overview of the latest activity</p>
            </div>
            <button className="flex items-center bg-white text-black hover:bg-purple-700 transition px-4 py-2 rounded text-sm">
              <Plus className="mr-2" size={18} />
              New API
            </button>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-2">
            <div className="bg-[#161616] p-4 rounded shadow min-h-[27vh]">
             
              <div className='flex flex-row space-x-60'>
                 <p className="text-sm text-gray-400 mb-1">Total Request</p>
                
   <div className='flex bg-white rounded-2xl w-20 h-7 items-center justify-center'>
                <span className="text-green-400 text-xs ">40%</span>
              </div>
              </div>
           
              <div className="flex flex-row space-x-75 pt-22">
                <div className='w-10 h-10 rounded-4xl bg-gray-500'>
                   <img src="/src/assets/icons/tap.png" className='bg-gray-600 rounded-4xl'/>
                </div>
                <h2 className="text-4xl ">276</h2>
                
              </div>
            </div>

            <div className="bg-[#161616] p-4 rounded shadow min-h-[27vh]">
             
              <div className='flex flex-row md:space-x-60 '>
                 <p className="text-sm text-gray-400 mb-1">Total Request</p>
                
   <div className='flex bg-white rounded-2xl w-20 h-7 items-center justify-center'>
                <span className="text-green-400 text-xs ">40%</span>
              </div>
              </div>
           
              <div className="flex flex-row space-x-75 pt-22">
                <div className='w-10 h-10 rounded-4xl bg-gray-500'>
                  <img src="/src/assets/icons/tap.png" className='bg-green-600 rounded-4xl'/>
                </div>
                <h2 className="text-4xl ">156</h2>
                
              </div>
            </div>

             <div className="bg-[#161616] p-4 rounded shadow min-h-[27vh]">
             
              <div className='flex flex-row space-x-60'>
                 <p className="text-sm text-gray-400 mb-1">Total Request</p>
                
   <div className='flex bg-white rounded-2xl w-20 h-7 items-center justify-center'>
                <span className="text-green-400 text-xs ">40%</span>
              </div>
              </div>
           
              <div className="flex flex-row space-x-75 pt-22">
                <div className='w-10 h-10 rounded-4xl bg-gray-500'>
                   <img src="/src/assets/icons/tap.png" className='bg-red-500 rounded-4xl'/>
                </div>
                <h2 className="text-4xl ">120</h2>
                
              </div>
            </div>

          </div>

          {/* Bar Chart */}
          <div className="bg-[#161616] p-6 rounded shadow">
            <div className="flex justify-between mb-4">
              <h3 className="text-lg font-semibold">Request Overview</h3>
              <select className="bg-[#1a1a1a] text-gray-400 text-sm px-2 py-1 rounded">
                <option>Yearly (2025)</option>
                <option>Monthly</option>
              </select>
            </div>

            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="month" stroke="#ccc" />
                <YAxis stroke="#ccc" />
                <Tooltip />
                <Bar dataKey="requests" fill="url(#gradient)" />
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#8884d8" stopOpacity={0.2} />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </main>
      </div>
    </>
  );
}
