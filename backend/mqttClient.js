const mqtt = require('mqtt');
require('dotenv').config();

const client = mqtt.connect(process.env.MQTT_BROKER);

client.on('connect', () => {
  console.log('[MQTT] Connected to broker');
  client.subscribe('Agrotek/Status', (err) => {
    if (err) console.error('[MQTT] Subscribe error:', err.message);
    else console.log('[MQTT] Subscribed to Agrotek/Status');
  });
});

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

function subscribeSensor(callback) {
  client.on('message', (topic, message) => {
    if (topic !== 'Agrotek/Status') return;

    try {
      const payload = JSON.parse(message.toString());
      const { device_id, voltage, current, power, energy, battery } = payload;

      if (!device_id) throw new Error('Missing device_id');
      callback(device_id, { voltage, current, power, energy, battery });
    } catch (err) {
      console.error('[MQTT] Failed to parse sensor data:', err.message);
    }
  });
}

module.exports = { publishCommand, subscribeSensor };
