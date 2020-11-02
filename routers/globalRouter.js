import express from "express";
import routes from "../routes.js"
import { home, search } from "../controller/videoController.js";
import { getJoin, postJoin, getLogin, postLogin, logout } from "../controller/userController.js";

const globalRouter = express.Router();

//하단과 동일함 
//globalRouter.get(routes.home, (req, res) => res.send('Home'));
globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getLogin);
globalRouter.post(routes.login, postLogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.logout, logout);
globalRouter.get(routes.search, search);

export default globalRouter;