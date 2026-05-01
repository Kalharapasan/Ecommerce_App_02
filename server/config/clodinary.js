import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: process.env.CLDN_NAME,
    api_key: process.env.CLDN_API_KEY,    // Changed from CLDN_API_SECRET
    api_secret: process.env.CLDN_API_SECRET,
  });
};

export default connectCloudinary;