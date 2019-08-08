import fs from 'fs';

function linesInFile(filePath) {
  const fileUtfString = fs.readFileSync(filePath, { encoding: 'utf8' });
  const splittedFile = fileUtfString.split('\n');
  const newLinesCountInFile = splittedFile.length - 1;
  return newLinesCountInFile;
}

export {
  linesInFile,
};
