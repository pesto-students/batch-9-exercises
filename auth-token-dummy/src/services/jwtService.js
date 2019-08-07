const jwt = require('jsonwebtoken');

const privateKey = 'test';

const encrptyJson = (obj, callback) => {
  jwt.sign(obj, privateKey, (error, encoded) => {
    if (!error) {
      callback(null, encoded);
    } else {
      callback(error);
    }
  });
};

const decryptToken = (token, callback) => {
  jwt.verify(token, privateKey, { algorithm: 'RS256' }, (error, decoded) => {
    if (!error) {
      callback(null, decoded);
    } else {
      callback(error);
    }
  });
};

module.exports = {
  encrptyJson,
  decryptToken,
};
