const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_KEY);

async function insertSensorData(user_id, data) {
  const { voltage, current, power, energy, battery } = data;

  const { error } = await supabase.from('usage_logs').insert([{
    user_id,
    voltage,
    current,
    power,
    energy,
    battery_percentage: battery,
    timestamp: new Date().toISOString()
  }]);

  if (error) {
    console.error('[SUPABASE] Insert error:', error.message);
  } else {
    console.log(`[SUPABASE] Data saved for user ${user_id}`);
  }
}

module.exports = { insertSensorData };
