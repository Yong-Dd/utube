import express from "express";
import { deleteVideo, getUpload, getEditVideo, postEditVideo, postUpload, VideoDetail, videos } from "../controller/videoController.js";
import { uploadVideo } from "../middlewares.js";
import routes from "../routes.js";

const videoRouter = express.Router();

//upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

//video detail
videoRouter.get(routes.videoDetail(), VideoDetail);

//Edit video
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

//delete video
videoRouter.get(routes.deleteVideo(), deleteVideo);

//?
videoRouter.get(routes.videos, videos);
export default videoRouter;