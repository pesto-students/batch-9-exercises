const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const JWTVerifyMiddleware = require('./JWTVerifyMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', JWTVerifyMiddleware.checkToken, (req, res) => {
  console.log(req.decoded);
  if (req.decoded) {
    const movies = [
      'Harry potter',
      'Dark knight',
      'Avengers',
      '3 Idiots',
      'Chameli'
    ];

    res.status(200).json({ movies });
  }
});

app.post('/signup', (req, res) => {
  const token = jwt.sign(
    {
      username: req.body.username
    },
    'somesupersecretsecret',
    { expiresIn: '1h' }
  );
  res.status(200).json({
    token: token
  });
});

app.listen(8000);
