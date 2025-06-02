// src/pages/ResetPassword.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ResetSuccess = () => {
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');


  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white relative">
      <div className="w-full max-w-md h-screen bg-[#E7E8E3] border-4 border-black p-6 relative pb-32 flex flex-col justify-center">

        <h2 className="text-4xl font-bold text-green-700 mb-2 flex items-center justify-center">Congratulations!</h2>
        <p className="text-gray-600 text-lg mb-8 text-center justify-center">
            Press link below to be redirected to user Sign-In page
        </p>

        <div className="w-full p-8 flex flex-col max-w-md mx-auto absolute bottom-12 left-0 right-0">
            <Link to="/signin" className="text-[#3E9E53] hover:text-green-900 text-center py-4 rounded-lg font-semibold  text-base transition-colors font-['League_Spartan']">
                Sign-In Here
            </Link>
        </div>


        {message && <p className="text-green-600 mt-4 text-sm">{message}</p>}
        {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}
      </div>
    </div>
  );
};

export default ResetSuccess;
