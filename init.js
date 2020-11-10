//./처럼 경로 주는게 중요함!!!
import "./db.js";
import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();
import "./models/Video.js"
import "./models/Comment.js"
// const PORT = 4000;
const PORT = process.env.PORT || 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);