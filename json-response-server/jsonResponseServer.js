const http = require('http');

const jsonResponseServer = http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });
  res.end(JSON.stringify({ data: 'Pesto Bootcamp!' }));
});

export {
  jsonResponseServer,
};
