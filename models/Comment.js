import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
    text: {
        type:String,
        required: "Text is required"
    },
    createdAT: {
        type:Date,
        default: Date.now
    }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
