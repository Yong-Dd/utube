import multer from "multer";
import routes from "./routes.js";

const multerVideo = multer({dest:"uploads/videos/"});

export const localMiddleware = (req, res, next) => {
    res.locals.siteName = "Utube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};

export const uploadVideo =  multerVideo.single('videoFile');