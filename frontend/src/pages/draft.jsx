import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-white">

      {/* Mockup Phone Frame */}
      <div className="w-full max-w-[390px] h-screen max-h-[844px] bg-[#385042] border-4 border-black flex flex-col justify-between items-center py-10 relative overflow-hidden">


        {/* Logo Section */}
        <div className="flex flex-col items-center mt-16 mb-8">
          <img 
            src="src/assets/agrotek-logo.png" 
            alt="Agrotek Logo" 
            className="w-48 h-38 mb-2"
          />
          <h1 className="text-white font-extrabold tracking-wide" style={{ fontSize: '64px', letterSpacing: '-0.24px', marginBottom: 0, paddingBottom: 0 }}>AGROTEK</h1>
          <h2 className="text-green-300 text-lg font-semibold tracking-widest" style={{ letterSpacing: '6px', marginTop: 0, paddingTop: 0 }}>AUTONOMI</h2>
        </div>

        {/* Buttons Section */}
        <div className="flex flex-col space-y-4 w-4/5 mb-12">
          <Link
            to="/signin"
            className="bg-green-400 hover:bg-green-500 text-center py-3 rounded-lg font-semibold text-white text-base transition-colors"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="bg-green-600 hover:bg-green-700 text-center py-3 rounded-lg font-semibold text-white text-base transition-colors"
          >
            Sign Up
          </Link>
        </div>

      </div>

    </div>
  );
};

export default LandingPage;
