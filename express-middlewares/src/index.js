/* eslint-disable no-underscore-dangle */
const express = require('express');

const app = express();

let start = null;

app.use((req, res, next) => {
  start = new Date();
  res.set({
    'middleware-header': req.path.replace('/', ''),
  });
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello');
  next();
});

app.get('/languages', (req, res, next) => {
  res.json({ languages: ['c', 'python', 'javascript', 'java', 'c++'] });
  next();
});

app.get('/packages', (req, res, next) => {
  res.send({ packages: ['create-react-app', 'redux', 'react-redux', 'lodash', 'express'] });
  next();
});

app.use((req, res, next) => {
  console.log(`middleware-header=${res.getHeader('middleware-header')}`);
  console.log(`request-time=${start.toString()}`);
  next();
});

app.listen(3000, () => {
  console.log('listening on 3000');
});
