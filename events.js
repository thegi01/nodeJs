const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

console.log('--- events ---');
const myEmitter = new MyEmitter();
myEmitter.on('event', ()=>{
    console.log('an event occurred!');
});
myEmitter.emit('event');
console.log('');


/* this */
console.log('--- this ---');
const myEmitter2 = new MyEmitter();
myEmitter2.on('event', function(a, b){
    console.log(a, b, this);
   /* a b MyEmitter {
      domain: null,
      _events: { event: [Function] },
      _eventsCount: 1,
      _maxListeners: undefined }*/
});
myEmitter2.on('event', (a, b) => {
    console.log(a, b, this);
    /* a b {} */
});
myEmitter2.emit('event', 'a', 'b');
console.log('');


/* Asynchronous vs. Synchronous */
console.log('--- Asynchronous vs. Synchronous ---');
const myEmitter3 = new MyEmitter();
myEmitter3.on('event', (a, b) => {
    setImmediate( () => {
        console.log('this happens asyncronously');
    });
});
myEmitter3.emit('event', 'a', 'b');
console.log('');


/* Handling events only once */
console.log('--- Handling events only once ---');
const myEmitter4 = new MyEmitter();
let m = 0;
myEmitter4.on('event', () => {
    console.log(++m);
});
myEmitter4.emit('event');
// Prints: 1
myEmitter4.emit('event');
// Prints: 2
console.log('');


/* eventEmitter.once() */
console.log('--- eventEmitter.once() ---');
const myEmitter5 = new MyEmitter();
let m2 = 0;
myEmitter5.once('event', () => {
    console.log(++m2);
});
myEmitter5.emit('event');
// Prints: 1
myEmitter5.emit('event');
// Ignored
console.log('');


/* Error events */
console.log('--- Error events ---');
const myEmitter6 = new MyEmitter();
myEmitter6.emit('event', new Error('whoops!'));
// Throws and crashes Node.js

const myEmitter7 = new MyEmitter();
myEmitter7.on('error', (err) => {
    console.log('whoops! there was an error');
});
myEmitter7.emit('error', new Error('whoops!'));
// whoops! there was an error
console.log('');



/* Class: EventEmitter */
console.log('--- Class: EventEmitter ---');
const myEmitter8 = new MyEmitter();
// Only do this once so we don't loop forever
myEmitter8.once('newListener', (event, listener) => {
    if( event === 'event' ){
        // Insert a new listener in front
        myEmitter8.on('event', () => {
            console.log('B');
        });
    }
});
myEmitter8.on('event', () => {
    console.log('A');
});
myEmitter8.emit('event');
console.log('');



/* Event: 'removeListener' */
console.log('--- Event: removeListener ---')
console.log('--- EventEmitter.listenerCount(emitter, eventName) ---');
const myEmitter9 = new MyEmitter();
myEmitter9.on('event', ()=>{});
myEmitter9.on('event', ()=>{});
console.log(EventEmitter.listenerCount(myEmitter9, 'event'));
// 2
console.log('');



/* EventEmitter.defaultMaxListeners */
/*console.log('--- EventEmitter.defaultMaxListeners ---');
emitter.setMaxListeners(emitter.getMaxListeners() + 1);
emitter.once('event', ()=>{
    // do stuff
    emitter.setMaxListeners(Math.max(emitter.getMaxListeners() - 1, 0));
});
*/



/* emitter.eventNames() */
console.log('--- emitter.eventNames() ---');
const myEE = new EventEmitter();
myEE.on('foo', ()=>{});
myEE.on('bar', ()=>{});

const sym = Symbol('symbol');
myEE.on(sym, ()=>{});

console.log(myEE.eventNames());
console.log('');



/* emitter.listeners(eventName) */
/*server.on('connetion', (stream) => {
    console.log('someone connected!');
});
console.log(util.inspect(server.listeners('connection')));*/



/* emitter.on(eventName, listener) */
console.log('--- emitter.on(eventName, listener) ---');
const myEE2 = new EventEmitter();
myEE2.on('foo', ()=> console.log('a') );
myEE2.prependListener('foo', ()=> console.log('b'));
myEE2.emit('foo');
//   b
//   a
console.log('');



/* emitter.once(eventName, listener) */
console.log('--- emitter.once(eventName, listener) ---');
const myEE3 = new EventEmitter();
myEE3.once('foo', ()=> console.log('a') );
myEE3.prependOnceListener('foo', ()=> console.log('b'));
myEE3.emit('foo');
//   b
//   a
console.log('');


