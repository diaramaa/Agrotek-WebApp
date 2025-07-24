const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { supabase } = require('../supabaseClient');

// Middleware: verifikasi admin
function verifyAdmin(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.user_type !== 'admin') {
      return res.status(403).json({ error: 'Forbidden: not admin' });
    }
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

// POST /admin/update-user
router.post('/update-user', verifyAdmin, async (req, res) => {
  const { user_id, metadata } = req.body;
  if (!user_id || !metadata) {
    return res.status(400).json({ error: 'Missing user_id or metadata' });
  }

  const { error } = await supabase.auth.admin.updateUserById(user_id, {
    user_metadata: metadata,
  });

  if (error) return res.status(500).json({ error: error.message });
  res.json({ success: true });
});

module.exports = router;