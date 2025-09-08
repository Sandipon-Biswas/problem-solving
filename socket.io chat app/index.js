import express from "express";
import http from "http";
import path from "path";
import { Server } from "socket.io";
import { fileURLToPath } from "url";
const app = express();
const expressServer = http.createServer(app);
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

let io = new Server(expressServer);
io.on("connection",(socket)=>{

    console.log("new user connected")

    socket.on("aa",(sms)=>{
        console.log(sms)
        io.emit("tt",sms);
    })
})

expressServer.listen(3000, () => {
  console.log("server is tunning on port 3000");
});
