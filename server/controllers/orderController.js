import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import transporter from "../config/nodemailer.js";
import stripe from "stripe"

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
        // Clear user Cart after placing order
        await User.findByIdAndUpdate(userId, { cartData: {} })


        // Send confirmation email for COD
        const populatedOrder = await Order.findById(order._id).populate("items.product address")
        const user = await User.findById(userId)

        const productTitles = populatedOrder.items.map(item => item.product?.title || "Unknown").join(", ")
        const addressString = populatedOrder.address ? `${populatedOrder.address.street || "N/A"}, ${populatedOrder.address.city || "N/A"}, ${populatedOrder.address.state || "N/A"}, ${populatedOrder.address.country || "N/A"}` : "No address";

        const mailOptions = {
            from: process.env.MAIL_FROM || process.env.ADMIN_EMAIL,
            to: user.email,
            subject: "Order Details (COD)",
            html: `
                <h2>Your Delivery Details</h2>
                <p>Thank You for your Order! Below are your Order details:</p>
                <ul>
                    <li><strong>Order ID:</strong> ${populatedOrder._id}</li>
                    <li><strong>Products Name:</strong> ${productTitles}</li>
                    <li><strong>Address:</strong> ${addressString}</li>
                    <li><strong>Total Amount:</strong> ${process.env.CURRENCY || "$"}${populatedOrder.amount}</li>
                </ul>
                <p>You will get your delivery in 1-2 Days. Pay on delivery.</p>
                `
        }

        await transporter.sendMail(mailOptions)

        return res.json({ success: true, message: "Order Placed" })


    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// Place order using Stripe [POST '/stripe']
export const placeOrderStripe = async (req, res) => {
    try {
        const { items, address } = req.body;
        const { userId } = req.auth();

        if (!items || items.length === 0) {
            return res.json({ success: false, message: "Please add Product first" })
        }

        // calculate amount using items
        let subtotal = 0
        let productData = []

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

            productData.push({
                name: product.title, // Ensure this matches the Product schema
                price: unitPrice,
                quantity: item.quantity,
            })
        }

        // calculate total amount by adding tax and delivery charges
        const taxAmount = subtotal * taxPercentage
        const totalAmount = subtotal + taxAmount + delivery_charges

        // Create Order in DB
        const order = await Order.create({
            userId,
            items,
            amount: totalAmount,
            address,
            paymentMethod: "stripe",
        })

        const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)

        // Stripe line items
        let line_items = productData.map(((item) => ({
            price_data: {
                currency: currency,
                product_data: {
                    name: item.name, // Use name to match productData
                },
                unit_amount: Math.round(item.price * 100),
            },
            quantity: item.quantity,
        })))

        // Delivery Charges
        line_items.push({
            price_data: {
                currency,
                product_data: { name: "Delivery Charges" },
                unit_amount: Math.round(delivery_charges * 100),
            },
            quantity: 1,
        })


        // Create Stripe checkout session
        const session = await stripeInstance.checkout.sessions.create({
            line_items,
            mode: "payment",
            success_url: `${origin}/processing/my-orders`,
            cancel_url: `${origin}/cart`,
            metadata: {
                orderId: order._id.toString(),
                userId,
            }
        })

        return res.json({ success: true, url: session.url })

    } catch (error) {
        console.log("Stripe Error:", error.message)
        res.json({ success: false, message: error.message })

    }
}

// ALL Orders data for the user [POST '/userorders']
export const userOrders = async (req, res) => {
    try {

        const { userId } = req.auth()
        const orders = await Order.find({ userId, $or: [{ paymentMethod: "COD" }, { isPaid: true }] }).populate("items.product address").sort({ createdAt: -1 })

        res.json({ success: true, orders })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// ALL Orders data for the Admin [GET '/']
export const allOrders = async (req, res) => {
    try {

        const orders = await Order.find({ $or: [{ paymentMethod: "COD" }, { isPaid: true }] }).populate("items.product address").sort({ createdAt: -1 })

        const totalOrders = orders.length
        const totalRevenue = orders.reduce((acc, o) => acc + (o.isPaid ? o.amount : 0), 0)

        res.json({ success: true, dashboardData: { totalOrders, totalRevenue, orders } })

    } catch (error) {
        console.log(error.message)
        return res.json({ success: false, message: error.message })
    }
}

// Update Order status for the Admin [POST '/status']
export const updateStatus = async (req, res) => {
    try {
        const { orderId, status } = req.body
        await Order.findByIdAndUpdate(orderId, { status })

        res.json({ success: true, message: "Order status updated" })

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}