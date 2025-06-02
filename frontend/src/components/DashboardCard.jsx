// src/components/DashboardCard.jsx
import { useEffect, useState } from "react";
import { CalendarDaysIcon, WifiIcon, BoltIcon } from "@heroicons/react/24/outline";
import { supabase } from "../services/supabaseClient";

export default function DashboardCard() {
  const [timeRange, setTimeRange] = useState("monthly");
  const [battery, setBattery] = useState(null);
  const [totalEnergy, setTotalEnergy] = useState(null);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const formattedTime = now.toLocaleString("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  useEffect(() => {
    let batteryChannel;

    const fetchBattery = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      const { data, error } = await supabase
        .from("usage_logs")
        .select("battery_percentage")
        .eq("user_id", user.id)
        .order("timestamp", { ascending: false })
        .limit(1)
        .single();

      if (!error && data) {
        setBattery(data.battery_percentage);
      }

      batteryChannel = supabase.channel(`battery_updates_${user.id}`);

      batteryChannel
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "usage_logs",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            if (payload.new.battery_percentage != null) {
              setBattery(payload.new.battery_percentage);
            }
          }
        )
        .subscribe();
    };

    fetchBattery();

    return () => {
      if (batteryChannel) {
        supabase.removeChannel(batteryChannel);
      }
    };
  }, []);

  useEffect(() => {
    let energyChannel;

    const fetchTotalEnergy = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;

      let fromDate = new Date();
      fromDate.setHours(0, 0, 0, 0);

      if (timeRange === "daily") {
        fromDate.setDate(now.getDate() - 1);
      } else if (timeRange === "weekly") {
        fromDate.setDate(now.getDate() - 7);
      } else {
        // ⬅️ Fix untuk ambil dari awal bulan
        fromDate = new Date(now.getFullYear(), now.getMonth(), 1);
      }

      const { data, error } = await supabase
        .from("usage_logs")
        .select("energy")
        .eq("user_id", user.id)
        .gte("timestamp", fromDate.toISOString());

      if (!error && data) {
        const sum = data.reduce((acc, row) => acc + (row.energy || 0), 0);
        setTotalEnergy(sum.toFixed(2));
      }

      energyChannel = supabase.channel(`energy_insert_${user.id}`);

      energyChannel
        .on(
          "postgres_changes",
          {
            event: "INSERT",
            schema: "public",
            table: "usage_logs",
            filter: `user_id=eq.${user.id}`,
          },
          (payload) => {
            if (payload.new.energy) {
              fetchTotalEnergy();
            }
          }
        )
        .subscribe();
    };

    fetchTotalEnergy();

    return () => {
      if (energyChannel) {
        supabase.removeChannel(energyChannel);
      }
    };
  }, [timeRange, now]);

  const radius = 15;
  const strokeWidth = 4;
  const diameter = radius * 2 + strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const offset =
    battery != null
      ? circumference - (battery / 100) * circumference
      : circumference;

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mx-4 mt-4 space-y-1">
      <div className="flex items-center justify-between mb-2">
        <p>
          <span className="text-black text-base font-medium">Energy Usage</span>
        </p>

        <div className="flex items-center gap-1 text-sm font-light">
          <CalendarDaysIcon className="w-4 h-4" />
          <span>{formattedTime}</span>
        </div>
      </div>

      <div className="flex justify-between items-center mt-1">
        <div>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full outline-none"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>

          <p className="text-xs text-gray-500">
            {timeRange === "daily"
              ? "Today"
              : timeRange === "weekly"
              ? "This Week"
              : "This Month"}
          </p>
          <p className="text-xl font-bold text-pink-600">
            {totalEnergy != null ? `${totalEnergy} kWh` : "Loading..."}
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-gray-600">
          <div className="flex flex-col items-center gap-1">
            <div className="relative flex items-center justify-center w-[40px] h-[40px]">
              <svg width={diameter} height={diameter}>
                <circle
                  cx={diameter / 2}
                  cy={diameter / 2}
                  r={radius}
                  stroke="#E5E7EB"
                  strokeWidth={strokeWidth}
                  fill="none"
                />
                <circle
                  cx={diameter / 2}
                  cy={diameter / 2}
                  r={radius}
                  stroke="#10B981"
                  strokeWidth={strokeWidth}
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={offset}
                  strokeLinecap="round"
                  style={{ transition: "stroke-dashoffset 0.5s ease" }}
                />
              </svg>
              <BoltIcon className="absolute top-1/2 left-1/2 w-5 h-5 text-gray-700 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
            <span className="text-base font-normal text-gray-800">
              {battery != null ? `${battery}%` : "..."}
            </span>
          </div>

          <div className="flex flex-col items-center gap-1">
            <WifiIcon className="w-10 h-8 text-gray-700" />
            <span>Connected</span>
          </div>
        </div>
      </div>
    </div>
  );
}
