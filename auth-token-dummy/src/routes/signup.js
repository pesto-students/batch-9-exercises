const express = require('express');
const jwtService = require('../services/jwtService');

const router = express.Router();

router.post('/', (req, res) => {
  const userObject = { username: req.body.username, password: req.body.password };
  jwtService.encrptyJson(userObject, (error, token) => {
    if (error) {
      res.status(500).send('Internal Server Error');
    } else {
      res.send(token);
    }
  });
});

module.exports = router;
