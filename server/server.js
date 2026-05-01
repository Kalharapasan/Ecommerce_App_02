import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/ClerkWebhooks.js"
import userRouter from "./routes/userRoutes.js"

dotenv.config({ path: fileURLToPath(new URL("./.env", import.meta.url)) })

await connectDB();

const app = express() // Initialize Express Application
app.use(cors()) // Enable Cross-Origin Resource sharing

// Middleware Setup
app.use(express.json()) // Enables JSON request body parsing
app.use(clerkMiddleware())

// API to Listen Clerk Webhooks
app.use("/api/clerk", clerkWebhooks)

// Define API Routes
app.use('/api/user', userRouter) // Routes for User functionality

// Route Endpoint to check API Status
app.get('/', (req, res) => {
    res.send("API Successfully connected")
})

const port = process.env.PORT || 3000 // Define server port

// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))