
const fs = require('fs');
const path = require('path');

function filteredNames(directory, fileType) {
  const directoryList = fs.readdirSync(directory, { encoding: 'utf-8' });
  const extension = `.${fileType}`;
  const filesWithRequiredFileType = directoryList.filter(file => path.extname(file) === extension);
  return filesWithRequiredFileType;
}

export {
  filteredNames,
};
