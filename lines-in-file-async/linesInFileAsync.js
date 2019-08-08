const fs = require('fs');

async function linesInFileAsync(path) {
  return new Promise((res, rej) => {
    fs.readFile(path, (error, data) =>
      res(String(data).split('\n').length - 1)
    );
  });
}

export { linesInFileAsync };
