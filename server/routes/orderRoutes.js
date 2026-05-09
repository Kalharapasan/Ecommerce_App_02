import express from "express"
import { placeOrderCOD } from "../controllers/orderController.js"
import authUser from "../middleware/authMiddleware.js"

const orderRouter = express.Router()

// For Payment
orderRouter.post('/cod', authUser, placeOrderCOD)