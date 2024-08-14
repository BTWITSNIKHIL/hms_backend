import app from "./app.js";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure Cloudinary
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET_API,
});

// Start the server
const PORT = process.env.PORT || 3000; // Fallback to port 3000 if not defined
app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
