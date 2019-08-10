const fs = require('fs');

function linesInFileAsync(filePath) {
  return new Promise((resolve) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (error, fileString) => {
      const lines = fileString.split('\n');
      resolve(lines.length - 1);
    });
  });
}

export {
  linesInFileAsync,
};
