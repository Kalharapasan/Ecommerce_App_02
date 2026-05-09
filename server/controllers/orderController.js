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
            return res.json({ success: false, message: "Please add Product first" })
        }

        // calculate amount using items
        let subtotal = 0
        for (const item of items) {
            const product = await Product.findById(item.product);
            if (!product) {
                return res.json({ success: false, message: "Product not found" })
            }

            const unitPrice = product.price[item.size] // Pick correct size first
            if (!unitPrice) {
                return res.json({ success: false, message: "Invalid size selected" })
            }

            subtotal += unitPrice * item.quantity
        }

        // calculate total amount by adding tax and delivery charges
        const taxAmount = subtotal * taxPercentage
        const totalAmount = subtotal + taxAmount + delivery_charges

        const order = await Order.create({
            userId,
            items,
            amount: totalAmount,
            address,
            paymentMethod: "COD",
        })

    } catch (error) {

    }
}