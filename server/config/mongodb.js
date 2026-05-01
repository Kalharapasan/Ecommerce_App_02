import mongoose from "mongoose";

const connectDB = async () => {
  const mongoUri = process.env.MONGO_URL || process.env.MONGO_URI;

  if (!mongoUri || (!mongoUri.startsWith("mongodb://") && !mongoUri.startsWith("mongodb+srv://"))) {
    throw new Error('Missing or invalid MongoDB connection string. Set MONGO_URL or MONGO_URI to a valid mongodb:// or mongodb+srv:// URI.');
  }

  try {
    await mongoose.connect(mongoUri)
    console.log("✓ Database connected")
  } catch (error) {
    throw new Error(`Database connection failed: ${error.message}`)
  }
}

export default connectDB;