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

export const VideoDetail = async(req, res) => {
    const {
        params: {id}
    } = req;
    try{
    const video = await Video.findById(id);
    res.render("videoDetail",{pageTitle:"Video Detail", video});
    }catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}

export const getEditVideo = async(req, res) => {
    const{
        params: {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo",{pageTitle:`Edit ${video.title}`, video});
    } catch(error){
        res.redirect(routes.home);
    }
}
export const postEditVideo = async(req, res) => {
    const {
        params: {id},
        body: {title, description}
    } = req;
    try{
        await Video.findOneAndUpdate({ _id:id },{title, description});
        res.redirect(routes.videoDetail(id));
    }catch(error){
        res.redirect(routes.home);
    }
};
export const deleteVideo = (req, res) => res.render("deleteVideo",{pageTitle:"Delete Video"});