const fs = require('fs')

// Async read file
fs.readFile('./text/read.txt', 'utf-8', (err, data)=>{
    if(err){
        throw Error("Error reading text")
    }
    console.log(data)
    fs.writeFile('./text/async-write.txt', 'Hello I am from async write', 'utf-8', (err)=>{
        if(err){
            throw Error("Error writing text")
        }
        console.log("data saved")
    })
})

// Async write file
