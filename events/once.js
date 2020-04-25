// Some times an listener should respond only once even if the event occurs multiple times

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

let m = 0;

myEmitter.once('event', () => {
    console.log(++m);
});

myEmitter.emit('event');  // prints 1

myEmitter.emit('event');  //but this is ignored