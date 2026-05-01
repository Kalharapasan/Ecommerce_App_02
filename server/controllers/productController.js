import { v2 as cloudinary } from "cloudinary"
import Product from "../models/Product.js"

// Controller Function for Creating Product [POST '/']
export const createProduct = async (req, res) => {
    try {
        const productData = JSON.parse(req.body.productData)
        const images = req.files

        // Upload images to cloudinary
        const imagesUrl = await Promise.all(
            images.map(async (item) => {
                const result = await cloudinary.uploader.upload(item.path, { resource_type: "image" })
                return result.secure_url
            })
        )

        await Product.create({ ...productData, images: imagesUrl })

        res.json({ success: true, message: "Product Added" })
    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}


// Controller function for get Product List [GET '/']
export const listProduct = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// Controller function for get single product [GET '/single']
export const singleProduct = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}

// Controller function for toggle stock [POST '/toggle-stock']
export const toggleStock = async (req, res) => {
    try {

    } catch (error) {
        console.log(error.message)
        res.json({ success: false, message: error.message })
    }
}