const http = require('http');

const httpServer = http.createServer((req, res) => {
  res.end('Pesto Bootcamp!\n');
});

export {
  httpServer,
};
