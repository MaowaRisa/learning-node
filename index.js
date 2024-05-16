// Local Module
// const {a, add} = require("./local-1")
// const {a : a2, add: add2} = require("./local-2") // Name Alias in destructuring
// console.log(add(2, 3) + " The variable from local-1 is " + a)
// console.log(add2(2, 3, 5) + " The variable from local-2 is " + a2)

// Built-in Module
const path = require("path")
console.log(path.parse("/Users/risa/Desktop/study/web3-level2/NodeJS & ExpressJS/learning-node/index.js"))

// path.dirname("")
// path.parse("")
// path.join("", "")