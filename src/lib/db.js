import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ MONGO_URI is not defined. Check your .env.local file.");
}

export const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ MongoDB Connected Successfully!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

// Listen to connection events
mongoose.connection.on("connected", () => {
  console.log("✅ MongoDB is connected.");
});

mongoose.connection.on("error", (err) => {
  console.log("❌ MongoDB connection error:", err);
});

mongoose.connection.on("disconnected", () => {
  console.log("⚠️ MongoDB disconnected.");
});
