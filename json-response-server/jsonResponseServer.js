const http = require('http');

// function jsonResponseServer(...args) {
//   const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'application/json' });
//     const data = { data: 'Pesto Bootcamp!' };
//     const json = JSON.stringify(data);
//     res.end(json);
//   });

//   return server;
// }
const jsonResponseServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const data = { data: 'Pesto Bootcamp!' };
  const json = JSON.stringify(data);
  res.end(json);
});
export { jsonResponseServer };
