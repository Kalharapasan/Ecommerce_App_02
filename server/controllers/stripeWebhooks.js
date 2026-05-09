import stripe from "stripe"
import Order from "../models/Order.js"
import User from "../models/User.js"

// Handle Stripe Webhooks
export const stripeWebhooks = async (request, response) => {
    // Stripe Gateway initialize
    const stripeInstance = new stripe(process.env.STRIPE_SECRET_KEY)
    const sig = request.headers["stripe-signature"]
    let event;

    try {
        event = stripeInstance.webhooks.constructEvent(
            request.body,
            sig,
            process.env.STRIPE_WEBHOOK_SECRET
        )
    } catch (error) {
        // Error handling would go here
    }
}