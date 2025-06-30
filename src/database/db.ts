import { configDotenv } from "dotenv";
import mongoose from "mongoose";

configDotenv();
export const connectMongodb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("Connected to MongoDB successfully");
  } catch (e) {
    console.log(process.env.MONGODB_URL || e);
  }
};
