const url = require('url');

function convertToFileUrl(filePath) {
  const encodedFileUriPath = `//${encodeURI(filePath)}`;
  return url.format({
    protocol: 'file',
    pathname: encodedFileUriPath,
  });
}

export {
  convertToFileUrl,
};
