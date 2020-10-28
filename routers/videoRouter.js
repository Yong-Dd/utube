import express from "express";
import { deleteVideo, editVideo, upload, VideoDetail, videos } from "../controller/videoController.js";
import routes from "../routes.js";

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, upload);
videoRouter.get(routes.videoDetail, VideoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);
export default videoRouter;