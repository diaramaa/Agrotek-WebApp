import { useEffect, useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from "recharts";
import { supabase } from "../supabaseClient";

export default function ChartCard() {
  const [metric, setMetric] = useState("energy");
  const [rawData, setRawData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // 1) Fetch data once
  useEffect(() => {
    (async () => {
      setLoading(true);
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      const { data, error } = await supabase
        .from("usage_logs")
        .select("timestamp, current, voltage, energy")
        .eq("user_id", user.id)
        .order("timestamp", { ascending: true });

      if (!error && data) {
        setRawData(
          data.map((d) => ({
            time: new Date(d.timestamp).toLocaleTimeString("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            }),
            current: d.current,
            voltage: d.voltage,
            energy: d.energy,
          }))
        );
      }
      setLoading(false);
    })();
  }, []);

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mx-4 mt-4">
      {/* Header */}
      <div className="flex justify-between items-center text-sm text-gray-500 mb-2">
        <p className="font-medium">{metricLabels[metric]}</p>
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

      {loading ? (
        <p className="text-center text-sm text-gray-400">Loading chart...</p>
      ) : (
        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer>
            <AreaChart
              data={rawData}
              margin={{ top: 20, right: 20, left: 0, bottom: 20 }}
            >
              <CartesianGrid stroke="#f0f0f0" strokeDasharray="3 3" />
              <XAxis
                dataKey="time"
                tick={{ fontSize: 11, fill: "#6B7280" }}
                interval={0}
              />
              <YAxis tick={{ fontSize: 11, fill: "#6B7280" }} />
              <Tooltip formatter={(v) => [`${v}`, metricLabels[metric]]} />
              <Area
                type="monotone"
                dataKey={metric}
                stroke={colors[metric]}
                fill={`${colors[metric]}33`}
                strokeWidth={2}
                dot={false}
              />
              <Brush
                dataKey="time"
                height={30}
                stroke="#8884d8"
                startIndex={rawData.length > 10 ? rawData.length - 10 : 0}
                endIndex={rawData.length - 1}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

