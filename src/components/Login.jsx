import React, { useState, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Eye, EyeOff } from 'lucide-react';
import Globe from './animation/Globe';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-8xl bg-[#111111] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-lg min-h-[90vh]">
        {/* Left Section */}
        <div
          className="md:w-1/2 w-full flex flex-col justify-center items-center bg-cover bg-center py-10 px-6 md:px-10"
          style={{
            backgroundImage:
              "url('/images/satin-bg.jpg')", // replace or remove this line if no image
          }}
        >
            <Canvas style={{ width: '100%', height: '400px' }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[5, 5, 5]} intensity={1} />
    <Suspense fallback={<Html><p className="text-white">Loading globe…</p></Html>}>
      <Globe scale={2.5} position={[0, 0, 0]} />
      <OrbitControls enableZoom={false} autoRotate />
    </Suspense>
  </Canvas>
          <div className="text-center">
            <h1 className="text-2xl md:text-3xl font-semibold text-white leading-tight">
              <span className="bg-gradient-to-r from-pink-500 via-purple-400 to-blue-400 bg-clip-text text-transparent">
                Create & Secure
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-transparent">
                Your APIs in Seconds
              </span>
            </h1>
            <p className="text-xs md:text-sm text-gray-300 mt-4 max-w-md">
              This Platform Empowers Developers, Teams, And Businesses To Create Secure API Proxy URLs That Act As Smart Gateways To Your Real APIs.
            </p>
          </div>
        </div>

        {/* Right Section (Login Form) */}
        <div className="w-full md:w-1/2 p-6 sm:p-10 text-white flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-semibold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-400 mt-2 mb-8">
            Securely Log In To Manage Your APIs, Domains, Keys, And Settings.
          </p>

          <form className="space-y-6">
            {/* Email Input */}
            <div>
              <label htmlFor="email" className="text-sm text-gray-400 block mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email Address"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 px-2 py-2 placeholder-gray-500"
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <label htmlFor="password" className="text-sm text-gray-400 block mb-1">
                Password
              </label>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter your password"
                className="w-full bg-transparent border-b border-gray-600 focus:outline-none focus:border-blue-500 px-2 py-2 placeholder-gray-500"
              />
              <div
                className="absolute right-2 top-9 cursor-pointer text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </div>
            </div>

            {/* Login Button */}
           <a href="/"> <button
              type="submit"
              className="w-full mt-6 bg-[#2D2D2D] hover:bg-[#3a3a3a] transition-all duration-200 py-3 rounded-md font-medium"
            >
              Login
            </button></a>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
