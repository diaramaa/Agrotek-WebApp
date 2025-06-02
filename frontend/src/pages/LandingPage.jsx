import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col justify-center items-center relative">
      <div className="w-full max-w-md h-screen bg-[#385042] mx-auto relative pb-32 flex flex-col justify-center">
        <div className="w-full max-w-md mx-auto">
          <div className="flex flex-col items-center">
            <img 
              src="src/assets/agrotek-logo.png" 
              alt="Agrotek Logo" 
              className="w-48 h-38 mb-2"
            />
            <h1 className="text-white font-extrabold tracking-wide font-['League_Spartan']" style={{ fontSize: '64px', letterSpacing: '-0.24px', marginBottom: 0, paddingBottom: 0 }}>AGROTEK</h1>
            <h2 className="text-green-300 text-lg font-semibold tracking-widest font-['Poppins']" style={{ letterSpacing: '11px', marginTop: 0, paddingTop: 0 }}>AUTONOMI</h2>
          </div>
        </div>

        <div className="w-full p-8 z-50 flex flex-col space-y-4 max-w-md mx-auto absolute bottom-12 left-0 right-0">
          <Link to="/signin" className="bg-green-400 hover:bg-green-500 text-center py-4 rounded-lg font-semibold text-white text-base transition-colors font-['League_Spartan']">
            Sign In
          </Link>
          <Link to="/signup" className="bg-green-600 hover:bg-green-700 text-center py-4 rounded-lg font-semibold text-white text-base transition-colors font-['League_Spartan']">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
