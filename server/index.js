

import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import roomRoutes from "./routes/roomRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());

// ✅ THIS IS CRITICAL
app.use("/api", roomRoutes);

app.get("/", (req, res) => {
  res.send("Hotel Room Reservation API is running");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
