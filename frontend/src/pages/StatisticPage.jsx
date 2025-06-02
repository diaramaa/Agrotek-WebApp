// src/pages/StatisticPage.jsx
import { useEffect, useState } from "react";
import BottomNavBar from "../components/BottomNavBar";
import { supabase } from "../services/supabaseClient";
import StatisticSummary from "../components/StatisticSummary";
import StatisticChart from "../components/StatisticChart";
import TimeFilterSelector from "../components/TimeFilterSelector";

export default function StatisticPage() {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [range, setRange] = useState("7days");

  useEffect(() => {
    const fetchLogs = async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      const end = new Date();
      let start = new Date();

      if (range === "today") {
        start.setHours(0, 0, 0, 0);
      } else if (range === "7days") {
        start.setDate(end.getDate() - 6);
        start.setHours(0, 0, 0, 0);
      } else if (range === "month") {
        start = new Date(end.getFullYear(), end.getMonth(), 1);
      }

      const { data, error } = await supabase
        .from("usage_logs")
        .select("*")
        .eq("user_id", user.id)
        .gte("timestamp", start.toISOString())
        .lte("timestamp", end.toISOString())
        .order("timestamp");

      if (!error) setLogs(data);
      setLoading(false);
    };

    fetchLogs();
  }, [range]);

  return (
    <div className="min-h-screen relative bg-gray-800">
      <div className="w-full max-w-md space-y-4 bg-[#FDFDFD] p-6 mx-auto pb-20 min-h-screen">
        <h1 className="text-xl font-semibold text-gray-800 mb-2">Statistic</h1>

        <TimeFilterSelector range={range} setRange={setRange} />
        <StatisticSummary data={logs} loading={loading} />
        <StatisticChart data={logs} loading={loading} />
      </div>

      <BottomNavBar />
    </div>
  );
}
