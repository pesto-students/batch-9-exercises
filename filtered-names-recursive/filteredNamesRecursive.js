
const fs = require('fs');
const path = require('path');

function filteredNamesRecursive(directory, fileType) {
  const directoryList = fs.readdirSync(directory, { encoding: 'utf-8' });
  const extension = `.${fileType}`;
  const filesWithRequiredFileType = directoryList.reduce((currentFileList, fileOrFolder) => {
    const fileOrFolderPath = path.join(directory, fileOrFolder);
    const fileStats = fs.statSync(fileOrFolderPath);
    if (fileStats.isDirectory()) {
      const filesInDirectory = filteredNamesRecursive(fileOrFolderPath, fileType);
      if (filesInDirectory) {
        currentFileList = [...currentFileList, ...filesInDirectory];
      }
    } else if (path.extname(fileOrFolder) === extension) {
      currentFileList.push(fileOrFolder);
    }
    return currentFileList;
  }, []);
  return filesWithRequiredFileType;
}

export {
  filteredNamesRecursive,
};
