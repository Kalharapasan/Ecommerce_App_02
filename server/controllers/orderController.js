import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";

// Global variables for payment
const currency = "usd"
const delivery_charges = 10 // 10 Dollars
const taxPercentage = 0.02 // 2% tax charges

// Place Order using COD [POST '/cod']
export const placeOrderCOD = async (req, res) => {
    try {
        const { items, address } = req.body
        const { userId } = req.auth()

        if (!items || items.length === 0) {
            return res.json({ success: false, message: "Please add product first" })
        }

    } catch (error) {

    }
}