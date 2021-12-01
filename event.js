const {EventEmitter} = require('events');

const myEvent = new EventEmitter();

myEvent.on('call', () => {
    console.log('Hello World');
});

myEvent.emit('call');