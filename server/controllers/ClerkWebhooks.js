import User from "../models/User";
import { Webhook } from "svix";

const clerkWebhooks = async (req, res) => {
    try {
        // Creating a Svix instance
        const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET)
        // Get headers
        const headers = {
            "svix-id": req.headers["svix-id"],
            "svix-timestamp": req.headers["svix-timestamp"],
            "svix-signature": req.headers["svix-signature"],
        }

        // Verifying headers
        await whook.verify(JSON.stringify(req.body), headers)

        // Getting Data from request body

    } catch (error) {

    }
}