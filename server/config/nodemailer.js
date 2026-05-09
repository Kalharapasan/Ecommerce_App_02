import nodemailer from "nodemailer"

// Create a test account or replace with real credentials.
const transporter = nodemailer.createTransport({
    host: "",
    port: 587,
    auth: {
        user: "",
        pass: "",
    },
});