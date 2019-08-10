/* eslint-disable no-unused-vars */
const readline = require('readline');
const fs = require('fs');

function linesInFile(filePath) {
  const fileText = fs.readFileSync(filePath, { encoding: 'utf8' });
  const lines = fileText.split('\n');
  return lines.length - 2;
}

export {
  linesInFile,
};
