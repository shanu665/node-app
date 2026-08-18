const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <h1>🚀 Node.js Deployment Successful!</h1>
    <p>Running inside Docker + AWS ECS</p>
  `);
});

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Application is healthy"
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});