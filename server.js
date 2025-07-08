const express = require("express");
const app = express();
app.use(express.json());

const commandDB = {};

app.listen(3000, () => {
  console.log("✅ Server running on port 3000");
});

app.post("/command", (req, res) => {
  const { deviceId, action, target } = req.body;
  commandDB[deviceId] = { action, target, time: Date.now() };
  res.json({ status: "ok" });
});

// 👇 שינוי חשוב כאן
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
