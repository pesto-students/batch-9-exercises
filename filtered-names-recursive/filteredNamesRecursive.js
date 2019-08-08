const fs = require('fs');
const path = require('path');

function filteredNamesRecursive(directory, extension) {
  const files = fs.readdirSync(directory);
  return files.reduce((currentFileList, file) => {
    const filePath = path.join(directory, file);
    const fileStats = fs.statSync(filePath);
    if (fileStats.isDirectory()) {
      const filesInDirectory = filteredNamesRecursive(filePath, extension);
      if (filesInDirectory) {
        currentFileList = [...currentFileList, ...filesInDirectory];
      }
    } else if (path.extname(file) === `.${extension}`) {
      currentFileList.push(file);
    }
    return currentFileList;
  }, []);
}

export { filteredNamesRecursive };
