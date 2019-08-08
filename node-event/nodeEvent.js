const EventEmitter = require('events');

class GreetEmitter extends EventEmitter {}

const greetEmitter = new GreetEmitter();
greetEmitter.on('greeting', (message) => {
  const isStringMessage = typeof message === 'string';
  if (!isStringMessage) {
    throw new Error(`Error: Enter a string please! Received value's type: ${typeof message}`);
  }
  console.log(`Hello ${message}`);
});
function nodeEvent(message) {
  greetEmitter.emit('greeting', message);
}

export {
  nodeEvent,
};
