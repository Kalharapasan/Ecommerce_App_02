import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb"

await connectDB();

const app = express() // Initialize Express Application
app.use(cors()) // Enable Cross-Origin Resource sharing

// Route Endpoint to check API Status
app.get('/', (req,res)=>{
    res.send("API Successfully connected")
})

const port = process.env.PORT || 3000 // Define server port

// Start the server
app.listen(port, () => console.log(`Server is running at http://localhost:${port}`))