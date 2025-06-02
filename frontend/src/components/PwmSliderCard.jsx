
import { useState } from "react";
import { sendCommandToMQTT } from "../services/ws";

export default function PwmSliderCard() {
  const [pwmValue, setPwmValue] = useState(0);

  const handleChange = (e) => {
    const value = Number(e.target.value);
    setPwmValue(value);
    console.log(`[PWM] Changed to ${value}`);
    // Kirim via WebSocket ke topic “Agrotek/Command/pwm”
    sendCommandToMQTT("Agrotek/Command/pwm", value.toString());
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-4 mx-4 mt-4">
      <p className="text-sm text-gray-500 mb-2">PWM Control</p>
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">0</span>
        <input
          type="range"
          min="0"
          max="255"
          value={pwmValue}
          onChange={handleChange}
          className="flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer 
                     accent-green-500 focus:outline-none"
        />
        <span className="text-gray-700 font-medium">255</span>
      </div>
      <p className="mt-2 text-center text-lg font-semibold text-pink-600">
        {pwmValue}
      </p>
    </div>
  );
}
