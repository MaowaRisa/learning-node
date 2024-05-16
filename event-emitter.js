const EventEmitter = require('node:events');

const myEmitter = new EventEmitter();
// listener
myEmitter.on('birthday', ()=>{
    console.log("Happy Birthday To You")
})
myEmitter.on('birthday', (gift)=>{
    console.log("Receive your "+ gift + " as gift")
})
myEmitter.emit('birthday', 'watch')