import User from "../models/User.js";

// Get user profile [Get '/']
export const getUserProfile = async (req, res) => {
  try {
    const role = req.user.role;
    const cartData = req.user.cartData;
    res.json({ success: true, role, cartData });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Create or update user [Post '/']
export const syncUser = async (req, res) => {
  try {
    const userId = req.body?.id || req.body?.userId || req.body?.clerkId;
    const email = req.body?.email || req.body?.email_address || req.body?.emailAddress;
    const username = req.body?.username || req.body?.name || req.body?.fullName;
    const image = req.body?.image || req.body?.imageUrl || req.body?.avatarUrl;

    if (!userId || !email || !username || !image) {
      return res.status(400).json({ success: false, message: "Missing user data" });
    }

    const user = await User.findByIdAndUpdate(
      userId,
      {
        _id: userId,
        email,
        username,
        image,
      },
      { new: true, upsert: true }
    );

    res.json({ success: true, user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};