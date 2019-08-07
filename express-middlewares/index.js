const express = require('express');


const app = express();

const PORT = 3000;

const setHeader = (req, res, next) => {
  res.set('middleware-header', req.path.slice(1));
  const dateTime = new Date(Date.now());
  console.log(dateTime.toString());
  next();
};

app.use(setHeader);

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/languages', (req, res) => {
  const languages = [
    {
      name: 'JavaScript',
    },
    {
      name: 'C++',
    },
    {
      name: 'Go',
    },
    {
      name: 'Haskell',
    },
    {
      name: 'TypeScript',
    },
  ];
  res.json(languages);
});

app.get('/packages', (req, res) => {
  const languages = [
    {
      name: 'nodemon',
    },
    {
      name: 'chalk',
    },
    {
      name: 'serve',
    },
    {
      name: 'generate-gitignore',
    },
    {
      name: 'create-react-app',
    },
  ];
  res.json(languages);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;
