import express from "express";
import routes from "../routes.js"
import { home, search } from "../controller/videoController.js";
import { join, login, logout } from "../controller/userController.js";

const globalRouter = express.Router();

//하단과 동일함 
//globalRouter.get(routes.home, (req, res) => res.send('Home'));
globalRouter.get(routes.home, home);
globalRouter.get(routes.join, join);
globalRouter.get(routes.login, login);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;