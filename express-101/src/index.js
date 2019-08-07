const express = require('express');

const app = express();

const PORT = 3000;

// 1) Create Routes
app.get('/', (req, res) => {
  res.send('Hey, I am server response');
});

app.get('/movie/:title', (req, res) => {
  res.send(`My favorite movie is ${req.params.title}`);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
