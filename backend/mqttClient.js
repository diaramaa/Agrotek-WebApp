const mqtt = require('mqtt');
require('dotenv').config();

const client = mqtt.connect(process.env.MQTT_BROKER); // ex: mqtt://localhost:1883

client.on('connect', () => {
  console.log('Connected to MQTT Broker');
  client.subscribe('Agrotek/Status'); // topik untuk data sensor
});

function publishCommand(topic, message) {
  client.publish(topic, message);
  console.log(`Published message: ${message} to topic: ${topic}`);
}

// fungsi ini menerima callback saat sensor data masuk
function subscribeSensor(callback) {
  client.on('message', (topic, message) => {
    if (topic === 'Agrotek/Status') {
      try {
        const payload = JSON.parse(message.toString());
        const { device_id, voltage, current, power, energy, battery } = payload;

        callback(device_id, { voltage, current, power, energy, battery });
      } catch (err) {
        console.error('[MQTT] JSON parse error:', err.message);
      }
    }
  });
}

module.exports = { publishCommand, subscribeSensor };
