// src/components/ArrowButtonGrid.jsx
import { useState, useRef } from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { sendCommandToMQTT } from "../services/ws";

export default function ArrowButtonGrid() {
  const [activeButtons, setActiveButtons] = useState([]);   
  const touchMap    = useRef({});  // pointerId → motor ("left" or "right")
  const timers      = useRef({});  // pointerId → interval ID

  // Map button ID to motor channel and command
  const getCommandById = (id) => {
    switch (id) {
      case 1: return { motor: "left",  cmd: "L_Up"   };
      case 3: return { motor: "left",  cmd: "L_Down" };
      case 2: return { motor: "right", cmd: "R_Up"   };
      case 4: return { motor: "right", cmd: "R_Down" };
      default: return null;
    }
  };

  const createCommandPayload = (cmd) => ({
    cmd,
    t0: Date.now(), //timestamp in milliseconds
  });

  // Kirim perintah dari pointer ID ke BE (MQTT)
  const startPress = (btnId, pointerId) => {
    const info = getCommandById(btnId);
    if (!info) return;

    const { motor, cmd } = info;
    console.log(`[startPress] pointer=${pointerId}, motor=${motor}, cmd=${cmd}`);

    // simpan mapping pointerId → motor
    touchMap.current[pointerId] = motor;
    setActiveButtons((prev) => Array.from(new Set([...prev, btnId])));

    // send
    sendCommandToMQTT(`Agrotek/Command/${motor}`, createCommandPayload(cmd));

    // mulai interval untuk mengirim perintah setiap detik
    timers.current[pointerId] = setInterval(() => {
      console.log(`[interval] pointer=${pointerId}, motor=${motor}, cmd=${cmd}`);
      sendCommandToMQTT(`Agrotek/Command/${motor}`, createCommandPayload(cmd));
    }, 1000);
  };

  // Hentikan perintah dari pointer ID
  const endPress = (pointerId) => {
    const motor = touchMap.current[pointerId];
    console.log(`[endPress] pointer=${pointerId}, motor=${motor}`);

    if (!motor) return;
    clearInterval(timers.current[pointerId]);
    delete timers.current[pointerId];
    delete touchMap.current[pointerId];

    // Kirim perintah berhenti
    const stopCmd = motor === "left" ? "L_Stop" : "R_Stop";
    console.log(`[stop] motor=${motor}, cmd=${stopCmd}`);
    sendCommandToMQTT(`Agrotek/Command/${motor}`, createCommandPayload(stopCmd));

    // Hapus dari daftar tombol aktif
    setActiveButtons((prev) =>
      prev.filter((id) => getCommandById(id)?.motor !== motor)
    );
  };

  // Touch handlers (mobile)
  const onTouchStart = (btnId) => (e) => {
    e.preventDefault();
    console.log(`[touchstart] btn=${btnId}, count=${e.changedTouches.length}`);
    for (const t of e.changedTouches) {
      startPress(btnId, t.identifier);
    }
  };

  // Hentikan semua sentuhan saat touch berakhir
  const onTouchEnd = (e) => {
    e.preventDefault();
    console.log(`[touchend] count=${e.changedTouches.length}`);
    for (const t of e.changedTouches) {
      endPress(t.identifier);
    }
  };

  // Mouse handlers (desktop)
  const onMouseDown = (btnId) => {
    console.log(`[mousedown] btn=${btnId}`);
    startPress(btnId, "mouse");
  };
  const onMouseUp = () => {
    console.log(`[mouseup]`);
    endPress("mouse");
  };

  const buttons = [
    { id: 1, icon: <ChevronUpIcon className="w-6 h-6" /> },
    { id: 2, icon: <ChevronUpIcon className="w-6 h-6" /> },
    { id: 3, icon: <ChevronDownIcon className="w-6 h-6" /> },
    { id: 4, icon: <ChevronDownIcon className="w-6 h-6" /> },
  ];

  return (
    <div className="grid grid-cols-2 gap-6 p-4">
      {buttons.map(({ id, icon }) => (
        <button
          key={id}
          className={`select-none rounded-lg py-8 flex justify-center items-center transition-colors duration-300 ${
            activeButtons.includes(id)
              ? "bg-green-500 text-white"
              : "bg-gray-100 text-gray-700"
          } hover:bg-green-400 hover:text-white`}
          onMouseDown={() => onMouseDown(id)}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart(id)}
          onTouchEnd={onTouchEnd}
          onTouchCancel={onTouchEnd}
        >
          {icon}
        </button>
      ))}
    </div>
  );
}
