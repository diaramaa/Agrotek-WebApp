// src/components/StatisticSummary.jsx
export default function StatisticSummary({ data, loading }) {
  if (loading) return <p className="text-gray-400">Loading summary...</p>;
  if (!data.length) return <p className="text-gray-400">Tidak ada data.</p>;

  const avg = (key) =>
    (data.reduce((sum, d) => sum + (d[key] || 0), 0) / data.length).toFixed(2);

  const totalEnergy = data.reduce((sum, d) => sum + (d.energy || 0), 0).toFixed(2);

  return (
    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
      <div className="p-4 bg-white rounded-xl shadow">⚡ Energi: {totalEnergy} kWh</div>
      <div className="p-4 bg-white rounded-xl shadow">🔌 Tegangan: {avg("voltage")} V</div>
      <div className="p-4 bg-white rounded-xl shadow">🔋 Arus: {avg("current")} A</div>
      <div className="p-4 bg-white rounded-xl shadow">⚙️ Daya: {avg("power")} W</div>
    </div>
  );
}
