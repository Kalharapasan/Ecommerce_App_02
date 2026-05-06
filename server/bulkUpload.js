import mongoose from "mongoose";
import "dotenv/config"
import { v2 as cloudinary } from "cloudinary";
import Product from "./models/Product.js";
import path from "path";
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Your dummyProducts array (update images to file names like 'product_1.png')
const dummyProducts = [
    {
        title: "Argan Hair Oil",
        images: ["product_1.png"],
        price: { "50ml": 15, "100ml": 25, "200ml": 40 },
        description:
            "Nourish your hair with our Argan Hair Oil, rich in vitamins for shiny and healthy locks. This lightweight formul",
        category: "Hair Care",
        type: "Oil",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
];

// Configure Cloudinary
cloudinary.config({
    cloud_name: process.env.CLDN_NAME,
    api_key: process.env.CLDN_API_KEY,
    api_secret: process.env.CLDN_API_SECRET,
});

async function bulkUpload() {

}
bulkUpload();