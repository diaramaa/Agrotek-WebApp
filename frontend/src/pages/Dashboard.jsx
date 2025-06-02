// src/pages/Dashboard.jsx
import { useEffect } from "react";
import GreetingCard from "../components/GreetingCard";
import DashboardCard from "../components/DashboardCard";
import ChartCard from "../components/ChartCard";
import ArrowButtonGrid from "../components/ArrowButtonGrid";
import BottomNavBar from "../components/BottomNavBar";
import { sendSessionToBackend } from "../services/sendSessionToBackend";

export default function Dashboard() {
  useEffect(() => {
    sendSessionToBackend("prototype-02")
  }, []);

  return (
    <div className="min-h-screen bg-gray-800 relative">
      <div className="w-full max-w-md mx-auto px-4 pt-4 pb-28 bg-[#FDFDFD]">
        <GreetingCard />
        <DashboardCard />
        <ChartCard />
        <ArrowButtonGrid />
      </div>

      <BottomNavBar />
    </div>
  );
}
