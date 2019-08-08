const fs = require('fs');

function linesInFile(path) {
  const filedData = fs.readFileSync(path);
  return String(filedData).split('\n').length - 2;
}

export { linesInFile };
