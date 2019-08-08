const path = require('path');

function convertToFileUrl(pathOfFile) {
  const pathName = path.resolve(pathOfFile);
  return encodeURI(`file://${pathName}`).replace(/[?#]/g, encodeURIComponent);
}

export { convertToFileUrl };
