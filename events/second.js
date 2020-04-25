const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
    console.log(a, b);
});

myEmitter.emit('event', 'Thrishul', 'Sathwik');  //arguements can be passed to events
