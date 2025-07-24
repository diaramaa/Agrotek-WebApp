// routes/record.js
const express = require("express");
const router = express.Router();
const { setCurrentDistance } = require("../mqttClient");

router.post("/", (req, res) => {
  const { distance } = req.body;

  if (!distance || typeof distance !== "number") {
    return res.status(400).json({ error: "Invalid distance" });
  }

  setCurrentDistance(distance);
  console.log(`[Record] Distance recording set to ${distance}m`);
  res.json({ success: true, distance });
});

router.delete("/", (req, res) => {
  currentDistance = null;
  setCurrentDistance(null);
  console.log(`[Record] Distance recording stopped`);
  res.json({ success: true, cleared: true });
});

module.exports = router;
