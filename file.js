const fs = require("fs")

// reading a file 
const readText = fs.readFileSync("./text/read.txt", "utf-8")
console.log(readText)

// write to a file
const writeText = fs.writeFileSync('./text/write.txt', 'This is my text ' + readText)

// The above code is synchronous 
