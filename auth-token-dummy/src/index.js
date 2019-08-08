const express = require('express');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const JWTVerifyMiddleware = require('./JWTVerifyMiddleware');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', JWTVerifyMiddleware.checkToken, (req, res) => {
  console.log(req);
  if (req.decoded) {
    const movies = [
      'Avengers',
      'Ultron',
      'Hobbs & shaw',
      'Super 30',
      'Taare zameen par',
    ];

    res.status(200).json({ movies });
  }
});

app.post('/signup', (req, res) => {
  const token = jwt.sign(
    {
      username: req.body.username,
      password: req.body.password,
    },
    'secretKey',
    { expiresIn: '1h' },
  );
  res.status(200).json({
    token,
  });
});

app.listen(8000, () => {
  console.log('listening on 8000');
});
