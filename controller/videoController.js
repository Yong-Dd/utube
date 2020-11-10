import routes from "../routes.js"
import Video from "../models/Video.js"

export const home = async(req, res) => {
    try{
        const dbVideos = await Video.find({});
        res.render("home",{pageTitle:"Home", dbVideos});
    }catch(error){
        console.log(error);
        res.render("home",{pageTitle:"Home", dbVideos:[]});
    }
};
export const search = (req, res) => {
    const{
        query: { term:searchingBy}
    } = req;
//   const searchingBy = req.query.term;
    res.render("search",{pageTitle:"Search", searchingBy, dbVideos});
};
export const getUpload = (req, res) => 
    res.render("upload",{pageTitle:"Upload"});
    export const postUpload = async(req, res) => {
        const{
            body: {title, description},
            file: {path}
         } = req;
         const newVideo = await Video.create({
             fileUrl: path,
             title,
             description
         });
        console.log(newVideo);
        res.redirect(routes.videoDetail(newVideo.id));
    // To do : Upload and save video
    };


export const videos = (req, res) => res.render("videos",{pageTitle:"Videos"});
export const VideoDetail = (req, res) => res.render("videoDetail",{pageTitle:"Video Detail"});
export const editVideo = (req, res) => res.render("editVideo",{pageTitle:"Edit Video"});
export const deleteVideo = (req, res) => res.render("deleteVideo",{pageTitle:"Delete Video"});