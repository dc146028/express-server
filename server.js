const express = require("express");
const app = express();
app.use(express.json());

const commandDB = {};

// שמירה על port דינמי שנשאב מהסביבה או 3000 ברירת מחדל
const PORT = process.env.PORT || 3000;

// שמיעת בקשות GET ו-POST
app.post("/command", (req, res) => {
  const { deviceId, action, target } = req.body;
  commandDB[deviceId] = { action, target, time: Date.now() };
  res.json({ status: "ok" });
});

// שמיעת בקשות GET
app.get("/command", (req, res) => {
  const deviceId = req.query.deviceId;
  res.json({ command: commandDB[deviceId] || null });
});

// התחלת השרת על פורט דינמי
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
