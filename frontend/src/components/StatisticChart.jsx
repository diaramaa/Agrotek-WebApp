// src/components/StatisticChart.jsx
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function StatisticChart({ data, loading }) {
  if (loading) return <p className="text-gray-400">Loading chart...</p>;
  if (!data.length) return <p className="text-gray-400">Tidak ada data untuk ditampilkan.</p>;

  const chartData = data.map((d) => ({
    timestamp: new Date(d.timestamp).toLocaleString("id-ID", {
      day: "2-digit",
      month: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }),
    energy: d.energy,
    voltage: d.voltage,
    arus: d.current,
    power: d.power,
  }));

  return (
    <div style={{ width: "100%", height: 250 }}>
      <ResponsiveContainer>
        <LineChart 
            data={chartData}
            margin={{ top: 20, right: 15, left: -20, bottom: 5 }}
        >
          <CartesianGrid stroke="#eee" strokeDasharray="3 3" />
          <XAxis dataKey="timestamp" tick={{ fontSize: 10 }} />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="energy" stroke="#3B82F6" name="Energi (kWh)" />
          <Line type="monotone" dataKey="voltage" stroke="#10B981" name="Tegangan (V)" />
          <Line type="monotone" dataKey="arus" stroke="#F59E0B" name="Arus (A)" />
          <Line type="monotone" dataKey="power" stroke="#EF4444" name="Daya (W)" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
