import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { emailRouter } from "./routes/routes.js";
import { userRouter } from "./routes/routes.js";
import { galleryRouter } from "./routes/routes.js";
dotenv.config();

const app = express();

const PORT = process.env.PORT;
const mongoUri = process.env.MONGO_URI;

app.use(express.json());
app.use(cors());

mongoose
  .connect(mongoUri)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Sets up route handlers for two paths
app.use("/emails", emailRouter);
app.use("/users", userRouter);
app.use("/gallery", galleryRouter);
