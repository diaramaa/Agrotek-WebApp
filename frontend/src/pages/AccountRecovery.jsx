// src/pages/ForgotPassword.jsx
import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const AccountRecovery = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleRecovery = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'https://api.agrotek.web.id/forgot-password/otp',
      });

      if (error) {
        toast.error('An error occurred. Please try again.');
        return;
      }

      localStorage.setItem('emailForOtp', email);
      toast.success('If the email exists, a reset link has been sent.');
      navigate('/forgot-password/otp');
    } catch (err) {
      toast.error('Something went wrong. Please try again.');
    }
  };
  

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative">
      <div className="w-full max-w-md h-screen bg-[#E7E8E3] border-4 border-black p-6 relative pb-32 flex flex-col justify-center">
        <div className='flex flex-col justify-start pt-8'>
          <div className='self-start absolute top-28'>
            <button
              className="text-black mb-4 left-4 bg-[#71C483] border border-gray-300 rounded-lg px-4 py-2 hover:bg-green-700 transition items-center justify-center"
              onClick={() => navigate(-1)}
            >
              ←
            </button>
          </div>

          <h2 className="text-2xl font-bold text-green-700 mb-2">Forgot Password?
          </h2>
          <p className="text-gray-600 mb-8">
            Enter your email address to get the password reset token
          </p>
        </div>


        <form onSubmit={handleRecovery}>
          <label htmlFor="email" className="text-sm font-semibold text-black">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="hello@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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

export default AccountRecovery;
