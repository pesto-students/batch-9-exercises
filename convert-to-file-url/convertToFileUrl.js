const path = require('path');

function convertToFileUrl(filePath) {
  const pathName = path.resolve(filePath);
  return encodeURI(`file://${pathName}`).replace(/[?#]/g, encodeURIComponent);
}

export {
  convertToFileUrl,
};
