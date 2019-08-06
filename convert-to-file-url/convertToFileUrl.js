const url = require('url');

function convertToFileUrl(file) {
  return url.pathToFileURL(file).href.replace('^', '%5E');
}

export {
  convertToFileUrl,
};
