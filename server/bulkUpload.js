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
            "Nourish your hair with our Argan Hair Oil, rich in vitamins for shiny and healthy locks. This lightweight formula absorbs quickly without leaving a greasy residue.",
        category: "Hair Care",
        type: "Oil",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Coconut Body Oil",
        images: ["product_27.png", "product_28.png", "product_24.png", "product_25.png"],
        price: { "100ml": 20, "200ml": 35, "400ml": 50 },
        description:
            "Hydrate your skin with our Coconut Body Oil, providing deep moisture and a tropical scent. It helps improve skin elasticity and leaves you feeling soft all day.",
        category: "Body Care",
        type: "Oil",
        sizes: ["100ml", "200ml", "400ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Jojoba Face Oil",
        images: ["product_3.png"],
        price: { "30ml": 25, "50ml": 40, "100ml": 60 },
        description:
            "Balance your skin with our Jojoba Face Oil, ideal for all skin types with natural mimicking properties. It regulates sebum production while providing essential hydration.",
        category: "Face Care",
        type: "Oil",
        sizes: ["30ml", "50ml", "100ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Tea Tree Hair Oil",
        images: ["product_4.png"],
        price: { "50ml": 18, "100ml": 30, "200ml": 45 },
        description:
            "Purify your scalp with our Tea Tree Hair Oil, helping to reduce dandruff and promote growth. Its antimicrobial properties keep your scalp healthy and clean.",
        category: "Hair Care",
        type: "Oil",
        sizes: ["50ml", "100ml", "200ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Almond Body Oil",
        images: ["product_5.png"],
        price: { "100ml": 22, "200ml": 38, "400ml": 55 },
        description:
            "Soften your skin with our Almond Body Oil, enriched with vitamin E for nourishment. This gentle formula is perfect for sensitive skin and improves skin texture.",
        category: "Body Care",
        type: "Oil",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Rosehip Face Oil",
        images: ["product_6.png"],
        price: { "30ml": 28, "50ml": 45, "100ml": 65 },
        description:
            "Rejuvenate your complexion with our Rosehip Face Oil, packed with antioxidants for glowing skin. It helps reduce the appearance of fine lines and scars.",
        category: "Face Care",
        type: "Oil",
        sizes: ["30ml", "50ml", "100ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Castor Hair Oil",
        images: ["product_7.png"],
        price: { "50ml": 12, "100ml": 20, "200ml": 35 },
        description:
            "Strengthen your hair with our Castor Hair Oil, known for promoting thickness and shine. This rich formula helps prevent split ends and breakage.",
        category: "Hair Care",
        type: "Oil",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Lavender Body Oil",
        images: ["product_8.png"],
        price: { "100ml": 25, "200ml": 40, "400ml": 60 },
        description:
            "Relax your body with our Lavender Body Oil, offering calming aromatherapy benefits. Perfect for evening use to promote restful sleep and relaxation.",
        category: "Body Care",
        type: "Oil",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Vitamin C Face Oil",
        images: ["product_9.png"],
        price: { "30ml": 30, "50ml": 50, "100ml": 75 },
        description:
            "Brighten your skin with our Vitamin C Face Oil, helping to reduce dark spots and even tone. This antioxidant-rich formula protects against environmental damage.",
        category: "Face Care",
        type: "Oil",
        sizes: ["30ml", "50ml", "100ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Citrus Burst Perfume",
        images: ["product_10.png"],
        price: { "50ml": 40, "100ml": 60, "200ml": 85 },
        description:
            "Invigorate your senses with our Citrus Burst Perfume, featuring fresh lemon and orange notes. This energizing fragrance lasts throughout the day.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Floral Dream Perfume",
        images: ["product_11.png"],
        price: { "50ml": 45, "100ml": 65, "200ml": 90 },
        description:
            "Embrace elegance with our Floral Dream Perfume, blending rose and jasmine essences. A timeless fragrance that's perfect for special occasions.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Woody Spice Perfume",
        images: ["product_12.png"],
        price: { "50ml": 35, "100ml": 55, "200ml": 80 },
        description:
            "Discover depth with our Woody Spice Perfume, combining sandalwood and cinnamon. This warm, earthy scent is perfect for evening wear.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Ocean Breeze Perfume",
        images: ["product_13.png"],
        price: { "50ml": 42, "100ml": 62, "200ml": 88 },
        description:
            "Feel refreshed with our Ocean Breeze Perfume, evoking sea salt and aquatic notes. This crisp, clean fragrance is ideal for everyday wear.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Vanilla Musk Perfume",
        images: ["product_14.png"],
        price: { "50ml": 38, "100ml": 58, "200ml": 82 },
        description:
            "Indulge in sweetness with our Vanilla Musk Perfume, a warm and inviting fragrance. This comforting scent is perfect for cozy evenings.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Spicy Amber Perfume",
        images: ["product_15.png"],
        price: { "50ml": 44, "100ml": 64, "200ml": 89 },
        description:
            "Ignite passion with our Spicy Amber Perfume, featuring rich amber and spicy notes for a captivating scent. This bold fragrance makes a statement.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Fresh Mint Perfume",
        images: ["product_16.png"],
        price: { "50ml": 36, "100ml": 56, "200ml": 81 },
        description:
            "Awaken your day with our Fresh Mint Perfume, blending mint and green tea. This revitalizing scent provides an energizing start to your morning.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Exotic Oud Perfume",
        images: ["product_17.png"],
        price: { "50ml": 48, "100ml": 70, "200ml": 95 },
        description:
            "Experience luxury with our Exotic Oud Perfume, rich in oud wood and incense. This opulent fragrance is perfect for making a lasting impression.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Berry Bliss Perfume",
        images: ["product_18.png"],
        price: { "50ml": 39, "100ml": 59, "200ml": 84 },
        description:
            "Delight in fruitiness with our Berry Bliss Perfume, mixing berries and floral hints. This playful fragrance is perfect for daytime adventures.",
        category: "Body Care",
        type: "Perfume",
        sizes: ["50ml", "100ml", "200ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Hyaluronic Acid Serum",
        images: ["product_19.png"],
        price: { "30ml": 25, "50ml": 40, "100ml": 60 },
        description:
            "Hydrate deeply with our Hyaluronic Acid Serum, locking in moisture for plump skin. This lightweight formula works for all skin types.",
        category: "Face Care",
        type: "Serum",
        sizes: ["30ml", "50ml", "100ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Vitamin C Brightening Serum",
        images: ["product_20.png"],
        price: { "30ml": 28, "50ml": 45, "100ml": 65 },
        description:
            "Illuminate your complexion with our Vitamin C Brightening Serum, reducing dark spots. This powerful antioxidant helps revive dull skin.",
        category: "Face Care",
        type: "Serum",
        sizes: ["30ml", "50ml", "100ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Retinol Anti-Aging Serum",
        images: ["product_21.png"],
        price: { "30ml": 30, "50ml": 50, "100ml": 70 },
        description:
            "Smooth wrinkles with our Retinol Anti-Aging Serum, promoting youthful skin. This advanced formula boosts collagen production overnight.",
        category: "Face Care",
        type: "Serum",
        sizes: ["30ml", "50ml", "100ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Niacinamide Balancing Serum",
        images: ["product_22.png"],
        price: { "30ml": 22, "50ml": 35, "100ml": 55 },
        description:
            "Control oil with our Niacinamide Balancing Serum, refining pores and texture. This multitasking serum helps calm inflammation and redness.",
        category: "Face Care",
        type: "Serum",
        sizes: ["30ml", "50ml", "100ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Peptide Firming Serum",
        images: ["product_23.png"],
        price: { "30ml": 32, "50ml": 52, "100ml": 75 },
        description:
            "Firm and lift with our Peptide Firming Serum, boosting collagen production. This targeted treatment helps restore skin's elasticity.",
        category: "Face Care",
        type: "Serum",
        sizes: ["30ml", "50ml", "100ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Volumizing Shampoo",
        images: ["product_24.png"],
        price: { "200ml": 15, "400ml": 25, "750ml": 40 },
        description:
            "Boost volume with our Volumizing Shampoo, adding body to fine hair. This formula gently cleanses while providing lift at the roots.",
        category: "Hair Care",
        type: "Shampoo",
        sizes: ["200ml", "400ml", "750ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Moisturizing Shampoo",
        images: ["product_25.png"],
        price: { "200ml": 18, "400ml": 30, "750ml": 45 },
        description:
            "Hydrate dry hair with our Moisturizing Shampoo, infused with natural oils. This nourishing formula helps restore moisture to parched strands.",
        category: "Hair Care",
        type: "Shampoo",
        sizes: ["200ml", "400ml", "750ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Clarifying Shampoo",
        images: ["product_26.png"],
        price: { "200ml": 20, "400ml": 35, "750ml": 50 },
        description:
            "Deep clean with our Clarifying Shampoo, removing buildup for fresh hair. This weekly treatment revitalizes your scalp and hair.",
        category: "Hair Care",
        type: "Shampoo",
        sizes: ["200ml", "400ml", "750ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Anti-Dandruff Shampoo",
        images: ["product_27.png"],
        price: { "200ml": 16, "400ml": 28, "750ml": 42 },
        description:
            "Combat flakes with our Anti-Dandruff Shampoo, soothing the scalp. This medicated formula helps control itching and flaking.",
        category: "Hair Care",
        type: "Shampoo",
        sizes: ["200ml", "400ml", "750ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Color-Protect Shampoo",
        images: ["product_28.png"],
        price: { "200ml": 19, "400ml": 32, "750ml": 48 },
        description:
            "Preserve color with our Color-Protect Shampoo, for vibrant dyed hair. This sulfate-free formula helps extend the life of your color treatment.",
        category: "Hair Care",
        type: "Shampoo",
        sizes: ["200ml", "400ml", "750ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Fresh Citrus Body Spray",
        images: ["product_29.png"],
        price: { "150ml": 12, "250ml": 20, "500ml": 35 },
        description:
            "Refresh instantly with our Fresh Citrus Body Spray, light and zesty. This invigorating mist is perfect for a quick pick-me-up throughout the day.",
        category: "Body Care",
        type: "Body-Spray",
        sizes: ["150ml", "250ml", "500ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Cool Mint Body Spray",
        images: ["product_30.png"],
        price: { "150ml": 14, "250ml": 22, "500ml": 38 },
        description:
            "Energize with our Cool Mint Body Spray, providing a cooling sensation. This refreshing formula awakens your senses and revitalizes your skin.",
        category: "Body Care",
        type: "Body-Spray",
        sizes: ["150ml", "250ml", "500ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Vanilla Dream Body Spray",
        images: ["product_31.png"],
        price: { "150ml": 13, "250ml": 21, "500ml": 36 },
        description:
            "Sweeten your day with our Vanilla Dream Body Spray, warm and comforting. This cozy fragrance wraps you in a soothing vanilla embrace.",
        category: "Body Care",
        type: "Body-Spray",
        sizes: ["150ml", "250ml", "500ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Ocean Wave Body Spray",
        images: ["product_32.png"],
        price: { "150ml": 15, "250ml": 25, "500ml": 40 },
        description:
            "Evoke the sea with our Ocean Wave Body Spray, fresh and aquatic. This breezy scent transports you to a coastal paradise with every spritz.",
        category: "Body Care",
        type: "Body-Spray",
        sizes: ["150ml", "250ml", "500ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Berry Fresh Body Spray",
        images: ["product_33.png"],
        price: { "150ml": 11, "250ml": 18, "500ml": 32 },
        description:
            "Burst with fruitiness using our Berry Fresh Body Spray, lively and sweet. This playful fragrance combines mixed berries for a delightful experience.",
        category: "Body Care",
        type: "Body-Spray",
        sizes: ["150ml", "250ml", "500ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Gentle Foaming Cleanser",
        images: ["product_34.png"],
        price: { "100ml": 15, "200ml": 25, "400ml": 40 },
        description:
            "Cleanse softly with our Gentle Foaming Cleanser, suitable for sensitive skin. This pH-balanced formula removes impurities without stripping natural oils.",
        category: "Face Care",
        type: "Cleanser",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Oil-Control Cleanser",
        images: ["product_35.png"],
        price: { "100ml": 18, "200ml": 30, "400ml": 45 },
        description:
            "Mattify with our Oil-Control Cleanser, reducing excess sebum. This deep-cleansing formula helps minimize shine throughout the day.",
        category: "Face Care",
        type: "Cleanser",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Hydrating Milk Cleanser",
        images: ["product_36.png"],
        price: { "100ml": 20, "200ml": 35, "400ml": 50 },
        description:
            "Moisturize while cleaning with our Hydrating Milk Cleanser, creamy and nourishing. This gentle formula is perfect for dry or dehydrated skin types.",
        category: "Face Care",
        type: "Cleanser",
        sizes: ["100ml", "200ml", "400ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Exfoliating Gel Cleanser",
        images: ["product_37.png"],
        price: { "100ml": 22, "200ml": 38, "400ml": 55 },
        description:
            "Renew skin with our Exfoliating Gel Cleanser, gently removing dead cells. This daily formula reveals brighter, smoother skin without irritation.",
        category: "Face Care",
        type: "Cleanser",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Micellar Water Cleanser",
        images: ["product_38.png"],
        price: { "100ml": 16, "200ml": 28, "400ml": 42 },
        description:
            "Remove makeup easily with our Micellar Water Cleanser, no-rinse formula. This multitasking water cleanses, tones, and refreshes in one step.",
        category: "Face Care",
        type: "Cleanser",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Antibacterial Hand Wash",
        images: ["product_39.png"],
        price: { "250ml": 10, "500ml": 18, "1000ml": 30 },
        description:
            "Protect with our Antibacterial Hand Wash, killing germs while being gentle. This effective formula eliminates 99.9% of bacteria without drying hands.",
        category: "Body Care",
        type: "Hand-Wash",
        sizes: ["250ml", "500ml", "1000ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Moisturizing Hand Wash",
        images: ["product_40.png"],
        price: { "250ml": 12, "500ml": 20, "1000ml": 35 },
        description:
            "Hydrate hands with our Moisturizing Hand Wash, infused with aloe vera. This nourishing formula cleanses while maintaining your skin's natural moisture barrier.",
        category: "Body Care",
        type: "Hand-Wash",
        sizes: ["250ml", "500ml", "1000ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Citrus Scented Hand Wash",
        images: ["product_41.png"],
        price: { "250ml": 11, "500ml": 19, "1000ml": 32 },
        description:
            "Refresh with our Citrus Scented Hand Wash, zesty and invigorating. This uplifting formula leaves hands clean and smelling like fresh citrus fruits.",
        category: "Body Care",
        type: "Hand-Wash",
        sizes: ["250ml", "500ml", "1000ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Lavender Calming Hand Wash",
        images: ["product_42.png"],
        price: { "250ml": 13, "500ml": 22, "1000ml": 38 },
        description:
            "Soothe with our Lavender Calming Hand Wash, relaxing and mild. This gentle formula features lavender essential oil for a calming handwashing experience.",
        category: "Body Care",
        type: "Hand-Wash",
        sizes: ["250ml", "500ml", "1000ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Tea Tree Purifying Hand Wash",
        images: ["product_43.png"],
        price: { "250ml": 14, "500ml": 24, "1000ml": 40 },
        description:
            "Purify with our Tea Tree Purifying Hand Wash, natural and effective. This formula uses tea tree oil's natural antiseptic properties for thorough cleansing.",
        category: "Body Care",
        type: "Hand-Wash",
        sizes: ["250ml", "500ml", "1000ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Matte Red Lipstick",
        images: ["product_44.png"],
        price: { "3g": 15, "5g": 25 },
        description:
            "Achieve bold lips with our Matte Red Lipstick, long-lasting and velvety. This highly pigmented formula provides full coverage with a comfortable wear.",
        category: "Face Care",
        type: "Lip-Product",
        sizes: ["3g", "5g"],
        popular: false,
        inStock: true,
    },
    {

        title: "Hydrating Lip Balm",
        images: ["product_45.png"],
        price: { "4g": 10, "8g": 18 },
        description:
            "Moisturize with our Hydrating Lip Balm, enriched with shea butter for soft lips. This nourishing formula provides instant relief for dry, chapped lips.",
        category: "Face Care",
        type: "Lip-Product",
        sizes: ["4g", "8g"],
        popular: false,
        inStock: true,
    },
    {

        title: "Glossy Pink Lip Gloss",
        images: ["product_46.png"],
        price: { "5ml": 12, "10ml": 20 },
        description:
            "Shine bright with our Glossy Pink Lip Gloss, non-sticky and plumping. This formula gives you a high-shine finish with a subtle hint of color.",
        category: "Face Care",
        type: "Lip-Product",
        sizes: ["5ml", "10ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Vitamin E Lip Serum",
        images: ["product_47.png"],
        price: { "10ml": 18, "20ml": 30 },
        description:
            "Repair and nourish with our Vitamin E Lip Serum, for smoother lips. This intensive treatment helps restore softness and suppleness to your lips.",
        category: "Face Care",
        type: "Lip-Product",
        sizes: ["10ml", "20ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Nude Matte Lipstick",
        images: ["product_48.png"],
        price: { "3g": 14, "5g": 24 },
        description:
            "Go natural with our Nude Matte Lipstick, perfect for everyday wear. This versatile shade complements all skin tones with a sophisticated matte finish.",
        category: "Face Care",
        type: "Lip-Product",
        sizes: ["3g", "5g"],
        popular: false,
        inStock: true,
    },
    {

        title: "Aloe Vera Body Lotion",
        images: ["product_49.png"],
        price: { "200ml": 15, "400ml": 25, "750ml": 40 },
        description:
            "Soothe skin with our Aloe Vera Body Lotion, cooling and hydrating. This lightweight formula absorbs quickly to provide instant relief for dry skin.",
        category: "Body Care",
        type: "Lotion",
        sizes: ["200ml", "400ml", "750ml"],
        popular: true,
        inStock: true,
    },
    {

        title: "Shea Butter Hand Lotion",
        images: ["product_50.png"],
        price: { "100ml": 12, "200ml": 20, "400ml": 35 },
        description:
            "Nourish hands with our Shea Butter Hand Lotion, rich and creamy. This intensive formula provides long-lasting moisture for overworked hands.",
        category: "Body Care",
        type: "Lotion",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Coconut Moisturizing Lotion",
        images: ["product_51.png"],
        price: { "200ml": 18, "400ml": 30, "750ml": 45 },
        description:
            "Hydrate deeply with our Coconut Moisturizing Lotion, tropical and light. Hydrate deeply with our Coconut Moisturizing Lotion, tropical and light.",
        category: "Body Care",
        type: "Lotion",
        sizes: ["200ml", "400ml", "750ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Lavender Relaxing Lotion",
        images: ["product_52.png"],
        price: { "100ml": 14, "200ml": 22, "400ml": 38 },
        description:
            "Calm your skin with our Lavender Relaxing Lotion, aromatic and soothing. Calm your skin with our Lavender Relaxing Lotion, aromatic and soothing.",
        category: "Body Care",
        type: "Lotion",
        sizes: ["100ml", "200ml", "400ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Vitamin E Enriched Lotion",
        images: ["product_53.png"],
        price: { "200ml": 20, "400ml": 35, "750ml": 50 },
        description:
            "Protect and repair with our Vitamin E Enriched Lotion, antioxidant-rich. Protect and repair with our Vitamin E Enriched Lotion, antioxidant-rich.",
        category: "Body Care",
        type: "Lotion",
        sizes: ["200ml", "400ml", "750ml"],
        popular: false,
        inStock: true,
    },
    {

        title: "Unscented Sensitive Lotion",
        images: ["product_54.png"],
        price: { "100ml": 16, "200ml": 28, "400ml": 42 },
        description:
            "Gentle care with our Unscented Sensitive Lotion, for delicate skin. Gentle care with our Unscented Sensitive Lotion, for delicate skin.",
        category: "Body Care",
        type: "Lotion",
        sizes: ["100ml", "200ml", "400ml"],
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

    try {

        // Connect to MongoDB
        await mongoose.connect(`${process.env.MONGO_URL}`); // Or your full URI

        for (const prod of dummyProducts) {
            // Upload images to Cloudinary
            const imagesUrl = await Promise.all(
                prod.images.map(async (filename) => {
                    const filePath = path.join(__dirname, "images", filename);
                    const result = await cloudinary.uploader.upload(filePath, {
                        resource_type: "image",
                    });
                    return result.secure_url;
                })
            );
            await Product.create({
                title: prod.title,
                description: prod.description,
                price: prod.price,
                sizes: prod.sizes,
                images: imagesUrl,
                category: prod.category,
                type: prod.type,
                popular: prod.popular,
                inStock: prod.inStock,
            });

            console.log(`Uploaded: ${prod.title}`);
        }
        console.log("All products uploaded successfully!");

    } catch (err) {

        console.error("Error:", err.message);
    } finally {
        mongoose.disconnect();
    }

}


bulkUpload();