import stripe from "stripe"
import Order from "../models/Order.js"
import User from "../models/User.js"

// Handle Stripe Webhooks
export const stripeWebhooks = async (request, response) => {
    // Stripe Gateway initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)

}