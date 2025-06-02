// src/components/ProtectedRoute.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import { toast } from "react-hot-toast";

import BottomNavBar from "../components/BottomNavBar";

export default function ProtectedRoute({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        setIsAuthenticated(true);
      } else {
        toast.error("Anda harus login terlebih dahulu.");
        setIsAuthenticated(false);
        navigate("/signin");
      }
    };

    checkUser();
  }, [navigate]);

  if (isAuthenticated === null) {
    return (
    <div className="min-h-screen bg-gray-800 relative">
        <div className="w-full h-screen max-w-md mx-auto px-4 pt-4 pb-28 bg-[#FDFDFD] justify-center flex flex-col">
          <span className="p-4 text-center text-gray-500">Memeriksa sesi pengguna...</span>
        </div>
        <BottomNavBar />

    </div>
    

    );
  }

  return children;
}
