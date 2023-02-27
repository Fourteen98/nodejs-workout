// const EventEmitter = require('events');

// const customEmitter = new EventEmitter();

// customEmitter.on('response', (name, id) => {
//   console.log(`Data received: ${name} with id: ${id} `);
// })

// customEmitter.emit('response', 'Elias', 24)

const http = require('http');

// const server = http.createServer((req, res) => {
//   res.end('Welcome');
// })

const server = http.createServer();
// emits request event
// subscribe to it / listen for it / respond to it 

server.on('request', (req, res) => {
  res.end('Welcom');
})

server.listen(8001);