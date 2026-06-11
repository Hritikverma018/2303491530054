const express = require("express");
const cors = require("cors");

// Logging Middleware
const Log = require("../../logging middleware/logger");

const app = express();

app.use(cors());
app.use(express.json());

// In-memory notifications storage
let notifications = [];

// Home Route
app.get("/", (req, res) => {
  res.json({
    message: "Notification API Running"
  });
});

// Get All Notifications
app.get("/notifications", (req, res) => {
  res.json(notifications);
});

// Create Notification
app.post("/notifications", async (req, res) => {
  const notification = {
    id: Date.now(),
    userId: req.body.userId,
    title: req.body.title,
    message: req.body.message
  };

  notifications.push(notification);

  // Log successful creation
  await Log(
    "backend",
    "info",
    "service",
    "Notification created successfully"
  );

  res.status(201).json(notification);
});

// Delete Notification
app.delete("/notifications/:id", async (req, res) => {
  const id = Number(req.params.id);

  notifications = notifications.filter(
    (notification) => notification.id !== id
  );

  await Log(
    "backend",
    "warn",
    "service",
    `Notification deleted: ${id}`
  );

  res.json({
    message: "Notification deleted successfully"
  });
});

console.log("Notifications routes loaded");

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
