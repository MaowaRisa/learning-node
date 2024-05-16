const http = require('http')
const fs = require("fs")
const { buffer } = require('stream/consumers')
// Creating a server using raw node js
const server = http.createServer()

// Server Listener
server.on('request', (req, res)=>{
    if(req.url === '/read-file' &&  req.method === 'GET');
    // Streaming file reading
    const readableStream = fs.createReadStream(process.cwd() + '/text/read.txt')
    readableStream.on('data', (buffer) =>{
        res.statusCode = 200;
        res.write(buffer)  
    })
    readableStream.on('end', ()=>{
        res.statusCode = 200
        res.end("The streaming is over")
    })
    readableStream.on('error', (err)=>{
        console.log(err)
        res.statusCode = 500
        res.end("Something went wrong")
    })
    
    
})
server.listen(5009, ()=>{
    console.log("The server is listening on port: 5009")
})
