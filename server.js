const express = require("express");
const mongoose = require("mongoose");

const app = express();

// รับ JSON
app.use(express.json());

app.use("/auth", require("./routes/auth"));
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("DB connected"))
  .catch(err => console.log("DB error:", err));

// ใช้ auth route
app.use("/auth", require("./routes/auth"));

// หน้า test
app.get("/", (req, res) => {
  res.send("API running");
});

// เปิด server
app.listen(3000, () => {
  console.log("Server running");
});