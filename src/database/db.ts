import mongoose from "mongoose";

export const connectedMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL || "");
    console.log("Succsefully connected db");
  } catch (error) {
    console.log("error", error);
  }
};
