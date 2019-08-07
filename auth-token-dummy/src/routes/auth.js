const express = require('express');
const jwtService = require('../services/jwtService');

const router = express.Router();

router.use('/', (req, res, next) => {
  const AuthHeader = req.headers.authorization;
  if (!AuthHeader) {
    return res.status(401).send('Not Authenticated');
  }
  jwtService.decryptToken(AuthHeader, (error, decoded) => {
    if (error) {
      return res.status(401).send('Not Authenticated');
    }
    req.user = decoded;
    return next();
  });
  return null;
});

router.get('/', (req, res) => {
  const favMovies = ['Dark Knight', 'Spider Man'];
  res.json(favMovies);
});

module.exports = router;
