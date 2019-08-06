const http = require('http');

const handler = function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Pesto Bootcamp!\n');
};

const httpServer = http.createServer();
httpServer.addListener('request', handler);

export {
  httpServer,
};
