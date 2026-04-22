const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const serviceRoutes = require("./routes/service.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ status: "ok", service: "farm-connect-backend" });
});

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);

module.exports = app;
