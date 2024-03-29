import express from "express"
import { changePassword, userDetail, editProfile, users } from "../controllers/userController"
import routes from "../routes"

const userRouter = express.Router()

userRouter.get(routes.users, users)
userRouter.get(routes.editProfile, editProfile)
userRouter.get(routes.changePassword, changePassword)
userRouter.get(routes.userDetail(), userDetail)

export default userRouter
