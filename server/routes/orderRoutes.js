import express from "express"
import { allOrders, placeOrderCOD, placeOrderStripe, updateStatus, userOrders } from "../controllers/orderController.js"
import authUser from "../middleware/authMiddleware.js"

const orderRouter = express.Router()

// For Admin
orderRouter.get('/', authUser, allOrders)
orderRouter.post('/status', authUser, updateStatus)

// For Payment
orderRouter.post('/cod', authUser, placeOrderCOD)
orderRouter.post('/stripe', authUser, placeOrderStripe)

// For User
orderRouter.post('/userorders', authUser, userOrders)

export default orderRouter