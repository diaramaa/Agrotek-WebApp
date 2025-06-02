// src/components/BottomNavBar.jsx
import { NavLink } from "react-router-dom";
import { ChartBarIcon, Cog6ToothIcon, HomeIcon } from "@heroicons/react/24/outline";

export default function BottomNavBar() {
  const baseClass = "flex flex-col items-center text-xs transition-all duration-300";
  const activeClass = "text-green-600 scale-110";
  const inactiveClass = "text-gray-500";

  return (
    <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white rounded-t-3xl drop-shadow-md shadow-2xl p-3 flex justify-around items-center">
      <NavLink
        to="/statistic"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <ChartBarIcon className="w-6 h-6 mb-1" />
        <span>Statistic</span>
      </NavLink>
      <NavLink
        to="/dashboard"
        end
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <HomeIcon className="w-6 h-6 mb-1" />
        <span>Dashboard</span>
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) =>
          `${baseClass} ${isActive ? activeClass : inactiveClass}`
        }
      >
        <Cog6ToothIcon className="w-6 h-6 mb-1" />
        <span>Settings</span>
      </NavLink>
    </div>
  );
}
