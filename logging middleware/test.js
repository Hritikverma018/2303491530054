const Log = require("./logger");

async function run() {
  await Log(
    "backend",
    "info",
    "service",
    "Notification service started successfully"
  );

  await Log(
    "backend",
    "warn",
    "db",
    "Database response time is high"
  );

  await Log(
    "backend",
    "error",
    "handler",
    "Received string, expected boolean"
  );
}

run();