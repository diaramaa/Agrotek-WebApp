import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
import { Toaster } from 'react-hot-toast';

import LandingPage from './pages/LandingPage';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AccountRecovery from './pages/AccountRecovery';
import OTP from './pages/OTP';
import ResetPassword from './pages/ResetPassword';
import ResetSuccess from './pages/ResetSuccess';
import SignupSuccess from './pages/SignupSuccess';
import Dashboard from './pages/Dashboard';
import Statistic from './pages/StatisticPage';
import Settings from './pages/SettingsPage';

function AppWrapper() {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/forgot-password" element={<AccountRecovery />} />
      <Route path="/forgot-password/otp" element={<OTP />} />
      <Route path="/forgot-password/otp/reset-password" element={<ResetPassword />} />
      <Route path="/forgot-password/otp/reset-password/success" element={<ResetSuccess />} />
      <Route path="/signup/success" element={<SignupSuccess />} />

      {/* 👇 Halaman yang butuh login */}
      <Route path="/dashboard" element={
        <ProtectedRoute><Dashboard /></ProtectedRoute>
      } />
      <Route path="/statistic" element={
        <ProtectedRoute><Statistic /></ProtectedRoute>
      } />
      <Route path="/settings" element={
        <ProtectedRoute><Settings /></ProtectedRoute>
      } />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: 'bg-gray-800 text-white',
          duration: 3000,
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <AppWrapper />
    </Router>
  );
}

export default App;
