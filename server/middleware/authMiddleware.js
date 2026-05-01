import User from "../models/User.js";

export const authUser = async (req, res, next) => {
  try {
    const { userId } = req.auth();
    if (!userId) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.json({ success: false, message: "Not Authorized" });
    }

    // Auto promote to owner if email matches env Owner email

  } catch (error) {
    
  }
};