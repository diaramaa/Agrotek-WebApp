const mqtt = require('mqtt');
const fs = require('fs');
require('dotenv').config();

const client = mqtt.connect(process.env.MQTT_BROKER);

// Untuk simpan callback sensor dan jarak aktif
const sensorSubscribers = [];
let currentDistance = null;

// MQTT CONNECT
client.on('connect', () => {
  console.log('[MQTT] Connected to broker');
  client.subscribe('Agrotek/Status');
  client.subscribe('Agrotek/RTT');
});

// MQTT MESSAGE HANDLER
client.on('message', (topic, message) => {
  // ==== Handler SENSOR ====
  if (topic === 'Agrotek/Status') {
    try {
      const payload = JSON.parse(message.toString());
      const { device_id, voltage, current, power, energy, battery } = payload;

      if (!device_id) throw new Error('Missing device_id');
      for (const cb of sensorSubscribers) {
        cb(device_id, { voltage, current, power, energy, battery });
      }
    } catch (err) {
      console.error('[MQTT] Failed to parse sensor data:', err.message);
    }
    return;
  }

  // ==== Handler RTT ====
  if (topic === 'Agrotek/RTT') {
    if (currentDistance === null) {
      console.warn('[RTT] Skipped logging because distance is not set');
      return;
    }

    let payload;
    try {
      payload = JSON.parse(message.toString());
    } catch (err) {
      return console.error('[MQTT] Failed to parse RTT message:', err.message);
    }

    const logEntry = {
      timestamp: new Date().toISOString(),
      distance: currentDistance,
      ...payload,
    };

    const logLine = JSON.stringify(logEntry) + '\n';
    const fileName = `mqtt_rtt_log_${currentDistance}m.txt`;

    fs.appendFile(fileName, logLine, (err) => {
      if (err) console.error(`[RTT] Failed to write log to ${fileName}:`, err.message);
      else console.log(`[RTT] Logged to ${fileName}:`, logLine.trim());
    });

    return;
  }
});

// ==== PUBLISH COMMAND ====
function publishCommand(topic, message) {
  if (!topic || !message) {
    console.warn('[MQTT] Missing topic or message');
    return;
  }

  client.publish(topic, JSON.stringify(message), {}, (err) => {
    if (err) console.error('[MQTT] Publish error:', err.message);
    else console.log(`[MQTT] Published to ${topic}: ${JSON.stringify(message)} (${message.length} byte)`);
  });
}

// ==== SUBSCRIBE SENSOR ====
function subscribeSensor(callback) {
  sensorSubscribers.push(callback);
}

// ==== RECORD JARAK ====
function setCurrentDistance(meter) {
  currentDistance = meter;
  if (meter === null) {
    console.log(`[Record] Recording stopped`);
  } else {
    console.log(`[Record] Distance set to ${meter} meter`);
  }
}

module.exports = {
  publishCommand,
  subscribeSensor,
  setCurrentDistance,
};
