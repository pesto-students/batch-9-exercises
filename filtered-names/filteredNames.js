const fs = require('fs');
const path = require('path');

function filteredNames(directory, extension) {
  const filteredFiles = [];
  const files = fs.readdirSync(directory);
  files.forEach(file => {
    if (path.extname(file) === '.' + extension) {
      filteredFiles.push(file);
    }
  });
  return filteredFiles;
}

export { filteredNames };
