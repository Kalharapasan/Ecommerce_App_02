import User from "../models/User.js";

// Adding to Cart [POST '/add']
export const addToCart = async (req, res) => {
    try {
        const { itemId, size } = req.body;
        const { userId } = req.auth();
        const userData = await User.findById(userId);
        const cartData = await userData.cartData || {}; // Initialize if undefined

        if (cartData[itemId]) {
            if (cartData[itemId][size]) {
                cartData[itemId][size] += 1;
            } else {
                cartData[itemId][size] = 1;
            }
        } else {
            cartData[itemId] = {};
            cartData[itemId][size] = 1;
        }
        await User.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Added to Cart" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
};

// Update the Cart [POST '/update']
export const updateCart = async (req, res) => {
    try {
        const { itemId, size, quantity } = req.body
        const { userId } = req.auth()

        const userData = await User.findById(userId)
        const cartData = await userData.cartData || {}; // Initialize if undefined

        if (quantity <= 0) {
           delete cartData[itemId][size] // Delete only the specific size
        } else {
            cartData[itemId] = cartData[itemId] || {} // Ensure parent exist
            cartData[itemId][size] = quantity
        }

        await User.findByIdAndUpdate(userId, { cartData })
        res.json({ success: true, message: "Cart Updated" })

    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message });
    }
}