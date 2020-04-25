// This example shows how an  listener responds to the error event

const EventEmitter = require('events');

class MyEmitter extends EventEmitter{};

const myEmitter = new MyEmitter();

myEmitter.on('error', (err) => {
    console.error('Error ocurred');
});

myEmitter.emit('error', new Error('An error ocurred'));  //An error is thrown


