import { useEffect, useState } from "react";
import { supabase } from "../services/supabaseClient";
import { UserCircleIcon } from "@heroicons/react/24/solid";

export default function GreetingCard() {
  const [name, setName] = useState("User");

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (user?.user_metadata?.name) {
        setName(user.user_metadata.name);
      }
    };

    fetchUser();
  }, []);

  return (
    <div className="flex items-center justify-between px-4 pt-2">
      <div className="flex items-center gap-3">
        <UserCircleIcon className="w-8 h-8 text-gray-400" />
        <div>
          <p className="text-gray-500 text-sm">Welcome,</p>
          <h1 className="text-green-600 font-semibold text-lg truncate max-w-[180px]">{name}</h1>
        </div>
      </div>
      
    </div>
  );
}
