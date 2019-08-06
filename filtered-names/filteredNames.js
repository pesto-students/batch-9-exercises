const fs = require('fs');
const path = require('path');

function filteredNames(directory, fileType) {
  const members = fs.readdirSync(directory);
  const fileExtension = `.${fileType}`;
  const result = members.filter(file => path.extname(file) === fileExtension);
  return result;
}

export {
  filteredNames,
};
