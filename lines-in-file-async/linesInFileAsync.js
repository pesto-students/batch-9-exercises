import fs from 'fs';

function linesInFileAsync(filePath) {
  return new Promise((res) => {
    fs.readFile(filePath, { encoding: 'utf8' }, (error, fileUtfString) => {
      const splittedFile = fileUtfString.split('\n');
      const newLinesCountInFile = splittedFile.length - 1;
      res(newLinesCountInFile);
    });
  });
}

export {
  linesInFileAsync,
};
