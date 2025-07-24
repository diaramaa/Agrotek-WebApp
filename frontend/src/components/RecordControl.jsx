import { useState } from "react";
import {
  sendRecordToBackend,
  deleteRecordFromBackend,
} from "../services/RecordBackend";

export default function RecordControl() {
  const [recording, setRecording] = useState(false);
  const [selectedDistance, setSelectedDistance] = useState(null);
  const presets = [5, 10, 15, 20]; // meter

  const handleToggle = async () => {
    if (recording) {
      // Matikan recording
      await deleteRecordFromBackend();
      setSelectedDistance(null);
    }
    setRecording(!recording);
  };

  const handleSelectDistance = async (m) => {
    setSelectedDistance(m);
    await sendRecordToBackend(m);
  };

  return (
    <div className="mx-4 mt-4 space-y-2">
      <button
        onClick={handleToggle}
        className={`w-full font-medium py-2 rounded-lg transition ${
          recording
            ? "bg-red-500 hover:bg-red-600 text-white"
            : "bg-green-500 hover:bg-green-600 text-white"
        }`}
      >
        {recording ? "Stop Recording" : "Start Recording"}
      </button>

      {recording && (
        <div className="grid grid-cols-4 gap-2">
          {presets.map((m) => (
            <button
              key={m}
              onClick={() => handleSelectDistance(m)}
              className={`py-2 text-sm rounded-lg transition ${
                selectedDistance === m
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 hover:bg-gray-200 text-gray-800"
              }`}
            >
              {m}m
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
