const http = require('http');

const httpServer = http.createServer((request, response) => {
  response.end('Pesto Bootcamp!\n');
});
export {
  httpServer,
};
