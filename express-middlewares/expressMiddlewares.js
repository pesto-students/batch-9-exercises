const express = require('express');

const app = express();
app.use((req, res, next) => {
  res.set('middleware-header', req.path.slice(1));
  console.log(Date.now());
  next();
});

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  const languages = ['Javascript', 'Java', 'Swift', 'Node', 'C++'];

  res.json({ languages });
});

app.get('/packages', (req, res) => {
  const packages = [
    'Express',
    'body-parser',
    'nodemon',
    'create-react-app',
    'bcryt'
  ];

  res.json({ packages });
});

app.listen(3000);
