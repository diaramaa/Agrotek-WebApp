// src/components/TimeFilterSelector.jsx
export default function TimeFilterSelector({ range, setRange }) {
  return (
    <div className="flex justify-around mb-4">
      {[
        { label: "Hari Ini", value: "today" },
        { label: "7 Hari", value: "7days" },
        { label: "Bulan Ini", value: "month" },
      ].map(({ label, value }) => (
        <button
          key={value}
          onClick={() => setRange(value)}
          className={`px-4 py-1 rounded-full text-sm font-medium shadow ${
            range === value ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
