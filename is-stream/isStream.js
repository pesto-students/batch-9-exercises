const stream = require('stream');

function isStream(object) {
  return object instanceof stream;
}

export { isStream };
