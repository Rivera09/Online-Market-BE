import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";

dotenv.config();
connectDB();

dotenv.config();
const app = express();

app.get("/", (_req, res) => {
  res.send("Backend working c:");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("running on port", PORT));
