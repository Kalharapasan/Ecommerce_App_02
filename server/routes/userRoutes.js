import express from "express"
import { getUserProfile, syncUser } from "../controllers/userController.js"
import authUser from "../middleware/authMiddleware.js"

const userRouter = express.Router()
userRouter.post('/', syncUser)
userRouter.get('/', authUser, getUserProfile)

export default userRouter