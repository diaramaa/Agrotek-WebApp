const socket = new WebSocket("ws://localhost:4000");

export function sendCommandToMQTT(topic, message) {
  const payload = { topic, message };
  if (socket.readyState === WebSocket.OPEN) {
    socket.send(JSON.stringify(payload));
  } else {
    socket.addEventListener('open', () => {
      socket.send(JSON.stringify(payload));
    });
  }
}
