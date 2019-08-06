const fs = require('fs');
const path = require('path');

function filteredNames(directory, extension) {
  console.log(extension);
  const filteredFiles = [];

  //   });
  const files = fs.readdirSync(directory);
  // console.log(files);
  files.forEach(file => {
    // console.log(path.extname(file));
    if (path.extname(file) === '.' + extension) {
      filteredFiles.push(file);
      // console.log(file);
    }
  });
  return filteredFiles;
}

// console.log(filteredNames(path.join(__dirname, 'Directory'), 'json'));

export { filteredNames };
