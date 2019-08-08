/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');

const checkToken = (req, res, next) => {
  let token = req.headers.authorization;
  if (token && token.includes('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, 'secretKey', (error, decoded) => {
      if (error) {
        return res.json({ message: 'Invalid Token' });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.json({
      message: 'Invalid Token',
    });
  }
};

module.exports = {
  checkToken,
};
