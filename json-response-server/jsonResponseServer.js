import http from 'http';

const jsonResponseServer = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  const dataToSend = { data: 'Pesto Bootcamp!' };
  const jsonStringData = JSON.stringify(dataToSend);
  res.end(jsonStringData);
});


export {
  jsonResponseServer,
};
