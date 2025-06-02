// src/components/ChartCard.jsx
import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Brush,
} from "recharts";
import { supabase } from "../services/supabaseClient";

export default function ChartCard() {
  const [metric, setMetric] = useState("energy");
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [now, setNow] = useState(new Date());

  const metricLabels = {
    current: "Current (A)",
    voltage: "Voltage (V)",
    energy: "Energy (kWh)",
  };

  const colors = {
    current: "#3B82F6",
    voltage: "#10B981",
    energy: "#8B5CF6",
  };

  // Update waktu setiap menit agar filter hari ini tetap relevan
  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  // Fetch data sekali saat mount
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        setLoading(false);
        return;
      }

      const { data, error } = await supabase
        .from("usage_logs")
        .select("timestamp, current, voltage, energy")
        .eq("user_id", user.id)
        .order("timestamp", { ascending: true });

      if (!error && Array.isArray(data)) {
        const processed = data.map((d) => {
          const ts = new Date(d.timestamp);
          return {
            dateObj: ts,
            hour: ts.getHours(),
            current: d.current,
            voltage: d.voltage,
            energy: d.energy,
          };
        });
        setRawData(processed);
      }

      setLoading(false);
    })();
  }, []);

  // Filter data hari ini
  const todayData = rawData.filter((d) => {
    const dt = d.dateObj;
    return (
      dt.getDate() === now.getDate() &&
      dt.getMonth() === now.getMonth() &&
      dt.getFullYear() === now.getFullYear()
    );
  });

  // Agregasi per jam (rata-rata)
  const hourlyMap = new Map();
  todayData.forEach((d) => {
    const hour = d.hour;
    if (!hourlyMap.has(hour)) {
      hourlyMap.set(hour, { count: 0, current: 0, voltage: 0, energy: 0 });
    }
    const acc = hourlyMap.get(hour);
    acc.count += 1;
    acc.current += d.current;
    acc.voltage += d.voltage;
    acc.energy += d.energy;
  });

  const hourlyData = Array.from(hourlyMap.entries()).map(([hour, val]) => {
    const time = new Date(now);
    time.setHours(hour, 0, 0, 0);
    return {
      timestamp: time.getTime(),
      current: val.current / val.count,
      voltage: val.voltage / val.count,
      energy: val.energy / val.count,
    };
  });

  // Format tanggal
  const dateLabel = now.toLocaleDateString("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mx-4 mt-4">
      {/* Header */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <div className="flex flex-col">
          <span className="font-medium">{metricLabels[metric]}</span>
          <span className="text-xs text-gray-400">{dateLabel}</span>
        </div>
        <select
          value={metric}
          onChange={(e) => setMetric(e.target.value)}
          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm"
        >
          <option value="current">Current</option>
          <option value="voltage">Voltage</option>
          <option value="energy">Energy</option>
        </select>
      </div>

      {/* Chart */}
      {loading ? (
        <p className="text-center text-sm text-gray-400">Loading chart...</p>
      ) : hourlyData.length === 0 ? (
        <p className="text-center text-sm text-gray-400">No data for today.</p>
      ) : (
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer>
            <AreaChart
              data={hourlyData}
              margin={{ top: 20, right: 15, left: -20, bottom: 5 }}
            >
              <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                type="number"
                domain={["auto", "auto"]}
                scale="time"
                tickFormatter={(ms) =>
                  new Date(ms).toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                  })
                }
                tick={{ fontSize: 11, fill: "#6B7280" }}
              />
              <YAxis tick={{ fontSize: 11, fill: "#6B7280" }} />
              <Tooltip
                labelFormatter={(ms) =>
                  new Date(ms).toLocaleTimeString("id-ID", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })
                }
                formatter={(value) => [`${value.toFixed(2)}`, metricLabels[metric]]}
              />
              <Area
                type="monotone"
                dataKey={metric}
                stroke={colors[metric]}
                fill={`${colors[metric]}33`}
                strokeWidth={2}
                dot={false}
              />
              <Brush
                dataKey="timestamp"
                height={30}
                stroke="#8884d8"
                travellerWidth={8}
                tickFormatter={(ms) =>
                  new Date(ms).toLocaleTimeString("id-ID", { hour: "2-digit" })
                }
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
