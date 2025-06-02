const socket = new WebSocket("wss://api.agrotek.web.id");

let isOpen = false;
const messageQueue = [];

socket.addEventListener("open", () => {
  isOpen = true;
  // Kirim semua pesan yang tertunda
  messageQueue.forEach((msg) => socket.send(msg));
});

export function sendCommandToMQTT(topic, message) {
  const payload = JSON.stringify({ topic, message });

  if (isOpen) {
    socket.send(payload);
  } else {
    messageQueue.push(payload);
  }
}
