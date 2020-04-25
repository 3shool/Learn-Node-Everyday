// All the events are executed synchronously one after the other in the sequence
// in which they are registered.
// They can be made asynchronous using the set immediate method
const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('event', (a, b) => {
    setImmediate(() => {
        console.log(a, b);
    });
});

myEmitter.on('event', () => {
    console.log('An event ocurred');
});

myEmitter.emit('event', 'Thrishul', 'Sathwik');  //arguements can be passed to events

