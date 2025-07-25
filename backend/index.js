const express = require('express');
const cors = require('cors');
const { WebSocketServer } = require('ws');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { performance } = require('perf_hooks');

const { publishCommand, subscribeSensor } = require('./mqttClient');
const { insertSensorData } = require('./supabaseClient');
const sessionMap = require('./sessionMap');
const sessionRoutes = require('./routes/session');
const adminRoutes = require('./routes/admin');
const recordRouter = require('./routes/record');
// const encodeCompactTimestamp = require('./encodeTimestamp');

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  methods: ['GET', 'POST', 'DELETE'],
  allowedHeaders: ['Authorization', 'Content-Type'],
}));
app.use(express.json());
app.use('/admin', adminRoutes);
app.use('/session', sessionRoutes);
app.use('/record', recordRouter);


// Start server
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// WebSocket handler
const wss = new WebSocketServer({ server });
wss.on('connection', (ws) => {
  console.log('[WebSocket] Client connected');

  ws.on('message', (msg) => {
    try {
      const data = JSON.parse(msg);
      const { topic, message } = data;

      // Handle khusus untuk PWM
      if (topic.includes('/Command/pwm')) {
        publishCommand(topic, message);
        return;
      }

      // Untuk command biasa
      const t0 = parseInt(message?.t0);
      const t1 = Date.now();

      // if(!isNaN(t0)) {
      //   const latency_ws = (t1 - t0);
      //   console.log(`[WebSocket] Latency FE to BE: ${latency_ws} ms`);
      // }

      publishCommand(topic, {
        ...message,
        t1: t1, // tambahkan waktu kirim dari BE
      });

      // Compact code
      // const compactMsg = encodeCompactTimestamp(message?.cmd || "UNKNOWN", t0, t1);
      // const compactTopic = topic.replace("Command", "CompactCommand");

      // publishCommand(compactTopic, compactMsg);
      // console.log(`[MQTT:Compact] ${compactTopic} → "${compactMsg}" (${compactMsg.length} byte)`);

    } catch (err) {
      console.error('[WebSocket] Invalid message format:', err.message);
    }
  });
});

// MQTT listener → simpan data sensor ke Supabase
subscribeSensor(async (device_id, sensorData) => {
  const user_id = sessionMap.get(device_id);
  if (!user_id) {
    return console.warn(`[MQTT] No user_id for device: ${device_id}`);
  }

  try {
    await insertSensorData(user_id, sensorData);
  } catch (err) {
    console.error(`[SUPABASE] Failed to insert data for ${user_id}:`, err.message);
  }
});
