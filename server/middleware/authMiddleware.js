import User from "../models/User.js";

export const authUser = async (req, res, next) => {
    try {
        if (typeof req.auth !== "function") {
            return res.json({ success: false, message: "Not Authorized" });
        }

        const { userId } = req.auth();
        if (!userId) {
            return res.json({ success: false, message: "Not Authorized" });
        }

        let user = await User.findById(userId);
        if (!user) {
            return res.json({ success: false, message: "Not Authorized" });
        }

        // Auto promote to owner if email matches env Owner email
        const ownerEmail = process.env.ADMIN_EMAIL
        const newRole = ownerEmail && user.email === ownerEmail ? "owner" : "user"

        if (user.role !== newRole) {
            // return the updated doc immediately
            user = await User.findByIdAndUpdate(userId, { role: newRole }, { new: true })
        }
        req.user = user;
        next()

    } catch (error) {
        console.log(error)
        return res.json({ success: false, message: error.message })
    }
};

export default authUser;