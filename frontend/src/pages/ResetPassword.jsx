// src/pages/ResetPassword.jsx
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePasswordReset = async (e) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      toast.error('Please fill in both fields');
      return;
    }

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Password reset successful!');
        setTimeout(() => navigate('/forgot-password/otp/reset-password/success'), 2000);
      }
    } catch (err) {
      toast.error('Unexpected error occurred');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative">
      <div className="w-full max-w-md h-screen bg-[#E7E8E3] border-4 border-black p-6 absolute pb-32 flex flex-col justify-center">
        <button
          className="text-black mb-4 top-28 left-4 bg-[#71C483] border border-gray-300 rounded-lg px-4 py-2 hover:bg-green-700 transition absolute"
          onClick={() => navigate(-1)}
        >
          ←
        </button>

        <h2 className="text-2xl font-bold text-green-700 mb-2">Reset Password</h2>
        <p className="text-gray-600 mb-8">
          Enter your new password to reset it. Make sure it's strong and secure.
        </p>

        <form onSubmit={handlePasswordReset}>
          <label htmlFor="password" className="text-sm font-semibold text-black">
            Enter your new password
          </label>
          <input
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
          />

          <label htmlFor="confirmPassword" className="text-sm font-semibold text-black">
            Re-enter your new password
          </label>
          <input
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            className="w-full mt-1 mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-100"
          />

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
          >
            Password Reset
          </button>
        </form>

        {message && <p className="text-green-600 mt-4 text-sm">{message}</p>}
        {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default ResetPassword;
