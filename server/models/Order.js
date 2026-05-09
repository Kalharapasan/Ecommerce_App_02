import mongoose from "mongoose";
const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true, ref: 'user' },
    items: [{
        product: { type: String, required: true, ref: 'user' },
    }]
}, { timestamps: true })

const Order = mongoose.model("Order", orderSchema)

export default Order