import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true, ref: 'user' },
    items: [{
        product: { type: String, required: true, ref: 'product' },
        quantity: { type: Number, required: true },
        size: { type: String, required: true },
    }]
}, { timestamps: true })

const Order = mongoose.model("Order", orderSchema)

export default Order