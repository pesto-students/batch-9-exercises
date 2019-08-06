/* eslint-disable no-unused-vars */
const readline = require('readline');
const fs = require('fs');

function linesInFile(filePath) {
  console.log(filePath);
  const readInterface = readline.createInterface({
    input: fs.createReadStream(filePath),
  });
  let count = 0;
  readInterface.on('line', (line) => {
    count += 1;
  });
  readInterface.on('close', (line) => {
  });
  return count;
}

export {
  linesInFile,
};
