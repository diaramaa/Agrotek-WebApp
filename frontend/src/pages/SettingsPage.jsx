// src/pages/SettingsPage.jsx
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../services/supabaseClient";
import BottomNavBar from "../components/BottomNavBar";

export default function SettingsPage() {
  const [user, setUser] = useState(null);
  const [display_name, setName] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user) {
        setUser(user);
        setName(user.user_metadata?.display_name || "");
      } else {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  const handleSaveName = async () => {
    const { error } = await supabase.auth.updateUser({
      data: { display_name },
    });

    if (error) {
      console.error("Failed to update name:", error.message);
    } else {
      setIsEditing(false);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/signin");
  };

  return (
    <div className="min-h-screen bg-gray-800 pb-20 px-4 relative">
        <div className="w-full max-w-md mx-auto h-screen bg-[#FDFDFD] p-6">

            <h1 className="text-xl font-semibold text-gray-800 mb-4">Settings</h1>

            <div className="bg-white rounded-xl shadow p-6 mb-4">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">Profile</h2>
                <div className="mb-2">
                <label className="text-sm text-gray-600 block mb-1">Email</label>
                <p className="text-gray-800">{user?.email}</p>
                </div>
                <div className="mb-2">
                <label className="text-sm text-gray-600 block mb-1">Name</label>
                {isEditing ? (
                    <div className="flex gap-2">
                    <input
                        type="text"
                        value={display_name}
                        onChange={(e) => setName(e.target.value)}
                        className="border rounded px-2 py-1 text-sm flex-1"
                    />
                    <button onClick={handleSaveName} className="text-sm text-white bg-green-500 px-3 py-1 rounded">
                        Save
                    </button>
                    </div>
                ) : (
                    <div className="flex justify-between items-center">
                    <p className="text-gray-800">{display_name || "Not set"}</p>
                    <button onClick={() => setIsEditing(true)} className="text-sm text-blue-500">Edit</button>
                    </div>
                )}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow p-6 text-center">
                <button
                onClick={handleLogout}
                className="text-red-600 text-sm font-medium hover:underline"
                >
                Log out
                </button>
            </div>

            <BottomNavBar />
        </div>
    </div>
  );
}
