import React, { useState } from 'react';
import { supabase } from '../services/supabaseClient';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const OTP = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // Move focus to next input if not last
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleVerify = async () => {
    const code = otp.join('');
    const email = localStorage.getItem('emailForOtp');

    if (!email) {
      toast.error('Email not found. Please try again.');
      return;
    }

    const { data, error } = await supabase.auth.verifyOtp({
      email,
      token: code,
      type: 'email',
    });

    if (error) {
      toast.error('Invalid or expired OTP code');
    } else {
      toast.success('Verification successful!');
      navigate('/forgot-password/otp/reset-password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative">
        <div className="w-full max-w-md h-screen bg-[#E7E8E3] border-4 border-black p-6 relative pb-32 flex flex-col justify-center">
            <button
                onClick={() => navigate(-1)}
                className="text-black mb-4 top-28 left-4 bg-[#71C483] border border-gray-300 rounded-lg px-4 py-2 hover:bg-green-700 transition absolute"
            >
                ←
            </button>

            <h1 className="text-2xl font-bold text-green-600 mb-2">OTP Verification</h1>
            <p className="text-gray-600 mb-8">
                Enter the verification code we just sent on your phone number
            </p>

            <div className="flex gap-4 mb-6 items-center justify-center">
                {otp.map((digit, index) => (
                <input
                    key={index}
                    id={`otp-${index}`}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    className="w-12 h-12 text-center rounded-lg bg-white text-lg font-medium shadow-md outline-none"
                    value={digit}
                    onChange={(e) => handleChange(e.target.value, index)}
                />
                ))}
            </div>

            <button
                onClick={handleVerify}
                className="bg-green-600 text-white px-12 py-3 rounded-xl font-semibold hover:bg-green-700"
            >
                Verify
            </button>
        </div>
    </div>
  );
};

export default OTP;
