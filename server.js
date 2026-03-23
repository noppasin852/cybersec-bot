console.log("SERVER FILE LOADED");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

// รับ JSON
app.use(express.json());

// ใช้ auth route (เอาไว้ครั้งเดียวพอ)
app.use("/auth", require("./routes/auth"));

// เชื่อม MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log("DB error:", err));

// หน้า test
app.get("/", (req, res) => {
  res.send("API running");
});

// เปิด server
app.listen(3000, () => {
  console.log("Server running");
});