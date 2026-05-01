import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URL || process.env.MONGO_URI;

  if (!mongoUri) {
    console.warn("MongoDB connection string is not set. Set MONGO_URL or MONGO_URI to enable database-backed features.");
    return false;
  }

  if (!mongoUri.startsWith("mongodb://") && !mongoUri.startsWith("mongodb+srv://")) {
    throw new Error('Invalid MongoDB connection string. Set MONGO_URL or MONGO_URI to a valid mongodb:// or mongodb+srv:// URI.');
  }

  try {
    await mongoose.connect(mongoUri)
    console.log("✓ Database connected")
    return true;
  } catch (error) {
    console.warn(`Database connection failed: ${error.message}`)
    return false;
  }
}

export default connectDB;