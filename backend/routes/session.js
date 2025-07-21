const express = require('express');
const jwt = require('jsonwebtoken');
const sessionMap = require('../sessionMap.js');

const router = express.Router();

// POST /session → Simpan device_id ↔ user_id dari token
router.post('/', (req, res) => {
  const { authorization } = req.headers;
  const { device_id } = req.body;

  if (!authorization || !device_id) {
    return res.status(400).json({ error: 'Missing token or device_id' });
  }

  const token = authorization.split(' ')[1];

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.SUPABASE_JWT_SECRET); // ← ini bagian yang diperbarui
  } catch (err) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  const user_id = decoded?.sub;
  if (!user_id) {
    return res.status(401).json({ error: 'Invalid token payload' });
  }

  sessionMap.set(device_id, user_id);
  console.log(`[SESSION] ${device_id} ↔ ${user_id}`);
  res.json({ success: true });
});

module.exports = router;
