import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [showPassword, setShowPassword] = useState({
    password1: false,
    password2: false,
  });
  const navigate = useNavigate();

  const handlePasswordToggle = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    navigate('/dashboard');
  };

  return (
    <div className="h-screen flex justify-center items-center bg-white p-6 sm:p-8">
      <div className="w-full max-w-md mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg">
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src="../images/ucover.png"
            alt="Logo"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
          />
        </div>

        {/* Title and Subtext */}
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-2">
          Sign up to get started
        </h2>
        <p className="text-center text-gray-600 mb-4 sm:mb-4">
          New here? You have come to the right place
        </p>

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="w-full lg:w-4/5 mx-auto">
          {/* Full Name */}
          <div className="mb-3 sm:mb-4">
            <input
              type="text"
              id="fullname"
              placeholder="Enter your full name"
              required
              aria-label="Full name"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Email */}
          <div className="mb-3 sm:mb-4">
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              aria-label="Email address"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Password */}
          <div className="mb-3 sm:mb-4">
            <div className="relative">
              <input
                type={showPassword.password1 ? 'text' : 'password'}
                id="password"
                placeholder="Enter your password"
                required
                aria-label="Password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => handlePasswordToggle('password1')}
                aria-label={showPassword.password1 ? 'Hide password' : 'Show password'}
              >
                {showPassword.password1 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Confirm Password */}
          <div className="mb-3 sm:mb-4">
            <div className="relative">
              <input
                type={showPassword.password2 ? 'text' : 'password'}
                id="confirm-password"
                placeholder="Confirm password"
                required
                aria-label="Confirm password"
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => handlePasswordToggle('password2')}
                aria-label={showPassword.password2 ? 'Hide password' : 'Show password'}
              >
                {showPassword.password2 ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-200"
          >
            Sign Up
          </button>

          {/* Separator */}
          <div className="flex items-center justify-center my-3 sm:my-4">
            <span className="h-px w-1/3 bg-gray-300"></span>
            <span className="px-2 text-gray-500">OR</span>
            <span className="h-px w-1/3 bg-gray-300"></span>
          </div>

          {/* Google Sign Up */}
          <button
            type="button"
            className="w-full bg-gray-100 text-gray-700 py-2 rounded-md flex justify-center items-center border hover:bg-gray-200 transition duration-200"
          >
            <FaGoogle className="mr-2 text-red-500" />
            Sign up with Google
          </button>
        </form>

        {/* Sign In Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <a href="/login" className="text-green-600 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}

export default Signin;
