import express from 'express';
import jwt from 'jsonwebtoken';
import sessionMap from '../sessionMap.js';

const router = express.Router();

router.post('/', async (req, res) => {
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

export default router;
