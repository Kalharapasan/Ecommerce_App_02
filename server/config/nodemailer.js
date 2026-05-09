import dotenv from "dotenv"
import { fileURLToPath } from "url"
import nodemailer from "nodemailer"

dotenv.config({ path: fileURLToPath(new URL("../.env", import.meta.url)) })

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.SMTP_SENDER_EMAIL,
        pass: process.env.SMTP_PASS,
    },
});

export default transporter