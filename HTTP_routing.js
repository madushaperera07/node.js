

const http = require("node:http")



const server =  http.createServer((req , res)=>{
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end("Home page")
    }else if(req.url ==="/about"){
        res.writeHead(200, {"Content-Type" : "text/html"})
        res.end("About page")
    }else{
        res.writeHead(404)
        res.end("Error")
    }
})

server.listen(3000 , ()=>{
    console.log("Server Running on port 3000")
})