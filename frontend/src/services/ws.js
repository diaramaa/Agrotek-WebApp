const socket = new WebSocket(import.meta.env.VITE_WEBSOCKET_URL);
let isOpen = false;
const messageQueue = [];

socket.addEventListener("open", () => {
  isOpen = true;
  while (messageQueue.length > 0) {
    socket.send(messageQueue.shift());
  }
});

socket.addEventListener("error", (e) => {
  console.error("WebSocket error:", e);
});

socket.addEventListener("close", () => {
  console.warn("WebSocket closed");
  isOpen = false;
});

export function sendCommandToMQTT(topic, message) {
  const payload = JSON.stringify({ topic, message });
  if (isOpen && socket.readyState === WebSocket.OPEN) {
    socket.send(payload);
  } else {
    messageQueue.push(payload);
  }
}
