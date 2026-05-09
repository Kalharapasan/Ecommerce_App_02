import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { fileURLToPath } from "url"
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from '@clerk/express'
import clerkWebhooks from "./controllers/ClerkWebhooks.js"
import { stripeWebhooks } from "./controllers/stripeWebhooks.js"
import userRouter from "./routes/userRoutes.js"
import connectCloudinary from "./config/clodinary.js"
import productRouter from "./routes/productRoutes.js"
import addressRouter from "./routes/addressRoutes.js"
import cartRouter from "./routes/cardRoutes.js"
import orderRouter from "./routes/orderRoutes.js"

dotenv.config({ path: fileURLToPath(new URL("./.env", import.meta.url)) })

const app = express() // Initialize Express Application

await connectDB() // Establish connection to the database
await connectCloudinary() // Setup cloudinary for image storage

// API to listen to stripe webhooks
app.post('/api/stripe', express.raw({type: "application/json"}), stripeWebhooks)

const authMiddleware = process.env.CLERK_SECRET_KEY
    ? clerkMiddleware()
    : (req, res, next) => {
        req.auth = () => ({ userId: null })
        next()
    }

app.use(cors()) // Enable Cross-Origin Resource sharing

// Clerk webhooks must keep the raw request body for signature verification.
app.use("/api/clerk", express.raw({ type: "application/json" }), clerkWebhooks)

// Middleware Setup
app.use(express.json()) // Enables JSON request body parsing
app.use(authMiddleware)

// Define API Routes
app.use('/api/user', userRouter) // Routes for User functionalit
app.use('/api/products', productRouter) // Routes for handling products
app.use('/api/addresses', addressRouter) // Routes for handling addresses
app.use('/api/cart', cartRouter) // Routes for handling addresses
app.use('/api/orders', orderRouter) // Routes for handling Order

// Route Endpoint to check API Status
app.get('/', (req, res) => {
    res.send("API Successfully connected")
})

const port = process.env.PORT || 3000 // Define server port

if (process.env.VERCEL !== "1") {
    // Start the server only for local development.
    app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))
}

export default app