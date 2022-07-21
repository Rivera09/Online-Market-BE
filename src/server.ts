import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.send("Backend working c:");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("running on port", PORT));
