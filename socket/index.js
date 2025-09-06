import express from "express"
import http from "http";
import path from "path"; 
import { Server } from "socket.io"; 
import { fileURLToPath }  from "url";
const app=express();
const expressServer= http.createServer(app);
const __filename= fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename)
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,"index.html"))
})


const io = new Server(expressServer); 
io.on("connection",(socket)=>{

    setInterval(() => {
        let d= new Date();
        let t=d.getTime();
        socket.emit("a",t);
    }, 50000);


    console.log("a user connected ", socket.id)
    socket.on("disconnect",()=>{
        console.log("a user diconnected", socket.id)
    })
})



expressServer.listen(3000,()=>{
console.log("server is tunning on port 3000")
})