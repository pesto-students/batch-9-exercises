const http = require('http');

const jsonResponseServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = { data: 'Pesto Bootcamp!' };
  res.end(JSON.stringify(data));
});

export {
  jsonResponseServer,
};
