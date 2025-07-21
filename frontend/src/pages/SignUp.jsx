import { useNavigate, Link } from 'react-router-dom'
import {useState} from 'react'
import { supabase } from '../services/supabaseClient'
import toast from 'react-hot-toast';
import authLogo from '../assets/password.png'


export default function SignUp() {
  const navigate = useNavigate();

  const [display_name, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user_type, setUserType] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { 
            display_name,
            user_type,
          },
        },
      });

      if (error) {
        setError(error.message);
        toast.error(error.message); 
        setMessage('');
      } else {
        toast.success('Account created successfully!'); 
        navigate('/signup/success');
      }

      } catch (err) {
        setError('Unexpected error occurred');
        toast.error('Unexpected error occurred');
      } finally {
        setLoading(false);
    }
  };


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <div className="w-full max-w-md space-y-8 h-screen bg-[#E7E8E3] border-4 border-black p-6 mx-auto relative pb-32 flex flex-col justify-center">
        <div className="flex flex-col items-center">
          <div className="self-start">
            <button
              className="text-black mb-4 bg-[#71C483] border border-gray-300 rounded-lg px-4 py-2 hover:bg-green-700 transition items-center justify-center"
              onClick={() => navigate('/')}
            >
              ←
            </button>
          </div>
          <img
            src={authLogo}
            alt="auth Logo"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign Up</h2>
          <p className="text-sm text-gray-600 text-center max-w-sm">
            Sign up to create an account and enjoy all the features of our platform.
          </p>
        </div>

        <div>
          <button className="google-btn">
            <img
              className="h-5 w-5 mr-2"
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google logo"
            />
            <span>Google</span>
          </button>
        </div>

        <div className="divider">
          <span>Or</span>
        </div>

        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
            <input
              type="text"
              placeholder="Name"
              value={display_name}
              onChange={(e) => setDisplayName(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
          </div>

          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {message && <p className="text-green-600 mt-4 text-sm">{message}</p>}
        {error && <p className="text-red-600 mt-4 text-sm">{error}</p>}

        <p className="mt-4 text-center text-sm text-gray-600">
          Do you have account?{' '}
          <Link to="/signin" className="text-primary hover:text-secondary font-semibold">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}
