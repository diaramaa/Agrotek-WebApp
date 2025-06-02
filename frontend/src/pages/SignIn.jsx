import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../services/supabaseClient'
import toast from 'react-hot-toast';
import authLogo from '../assets/password.png'


export default function SignIn() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        toast.error(error.message); 
      } else {
        toast.success('Login berhasil!'); 
        navigate('/dashboard');
      }
    } catch (err) {
      setError('Unexpected error occurred');
      toast.error('Unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-800 relative">
      <div className="w-full max-w-md space-y-8 h-screen bg-[#E7E8E3] p-6 mx-auto relative pb-32 flex flex-col justify-center overflow-auto">
        <div className="flex flex-col items-center pt-8">
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
            alt="auth logo"
            className="w-20 h-20 mb-4"
          />
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
          <p className="text-sm text-gray-600 text-center max-w-sm">
            Sign in to your account to access all features and functionalities.
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

        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="password"
              required
              className="input-field"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm text-center">
              {error}
            </p>
          )}

          <div className="flex items-center justify-end">
            <Link to="/forgot-password" className="text-sm text-primary hover:text-secondary">
              Forgot Password?
            </Link>
          </div>

          <button type="submit" className="btn-primary w-full" disabled={loading}>
            {loading ? 'Logging in...' : 'Log In'}
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don't have account?{' '}
          <Link to="/signup" className="text-primary hover:text-secondary font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  )
}
