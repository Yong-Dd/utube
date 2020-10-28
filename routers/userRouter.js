import express from "express";
import { changePassword, editProfile, userDetail, users } from "../controller/userController.js";
import routes from "../routes.js";

//this mean that this const only export
//export const userRouter = express.Router();

const userRouter = express.Router();

userRouter.get(routes.users, users);
userRouter.get(routes.userDetail, userDetail);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);

//The meaning of this is that it all exprot
export default userRouter;