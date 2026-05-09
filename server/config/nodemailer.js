import nodemailer from "nodemailer"

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: process.env.SMTP_SENDER_EMAIL,
        pass: process.env.SMTP_PASS,
    },
});

export default transporter