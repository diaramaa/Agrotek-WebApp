const express = require('express');
const cors = require('cors');
const { WebSocketServer } = require('ws');
const { publishCommand, subscribeSensor } = require('./mqttClient');
const sessionMap = require('./sessionMap');
const jwt = require('jsonwebtoken');
const { insertSensorData } = require('./supabaseClient');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 4000;

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Authorization', 'Content-Type'],
}));

app.use(express.json());

// Endpoint untuk menerima session (dari frontend)
app.post('/session', (req, res) => {
  const authHeader = req.headers.authorization;
  const { device_id } = req.body;

  if (!authHeader || !device_id) {
    return res.status(400).json({ error: 'Missing token or device_id' });
  }

  const token = authHeader.split(' ')[1];
  const decoded = jwt.decode(token);
  const user_id = decoded?.sub;

  if (!user_id) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  sessionMap.set(device_id, user_id);
  console.log(`[SESSION] ${device_id} ↔ ${user_id}`);
  res.json({ success: true });
});

const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const wss = new WebSocketServer({ server });

wss.on('connection', (ws) => {
  console.log('WebSocket client connected');

  ws.on('message', (msg) => {
    const data = JSON.parse(msg);
    console.log('Command from client:', data);
    publishCommand(data.topic, data.message);
  });
});

// Subscribe sensor data dari MQTT
subscribeSensor(async (device_id, sensorData) => {
  const user_id = sessionMap.get(device_id);
  if (!user_id) return console.warn(`[MQTT] No user_id for device: ${device_id}`);

  await insertSensorData(user_id, sensorData);
});