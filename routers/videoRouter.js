import express from "express";
import { deleteVideo, editVideo, getUpload, postUpload, VideoDetail, videos } from "../controller/videoController.js";
import { uploadVideo } from "../middlewares.js";
import routes from "../routes.js";

const videoRouter = express.Router();

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.videoDetail(), VideoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
export default videoRouter;