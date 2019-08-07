let jwt = require('jsonwebtoken');

let checkToken = (req, res, next) => {
  let token = req.headers['authorization']; // Express headers are auto converted to lowercase
  if (token && token.includes('Bearer ')) {
    token = token.slice(7, token.length);
  }

  if (token) {
    jwt.verify(token, 'somesupersecretsecret', (error, decoded) => {
      if (error) {
        return res.json({
          message: 'Not authenticated'
        });
      } else {
        req.decoded = decoded;
        next();
      }
    });
  } else {
    return res.json({
      message: 'Authentication not found'
    });
  }
};

module.exports = {
  checkToken: checkToken
};
