import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // Ensure dotenv is configured
export const dbConnection = () => {
  console.log('MongoDB URI:', process.env.MONGO_URL); // Add this line

  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "HOSPITAL_APPOINTMENT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occured while connecting to database:", err);
    });
};
