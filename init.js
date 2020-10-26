//./처럼 경로 주는게 중요함!!!
import app from "./app.js";

const PORT = 4000;

const handleListening = () => 
    console.log(`Listening on: http://localhost:${PORT}`);

app.listen(PORT, handleListening);