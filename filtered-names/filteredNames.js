const path = require('path');
const fs = require('fs');

function filteredNames(dir, format) {
  const files = fs.readdirSync(dir, { encoding: 'utf8' });
  const extension = `.${format}`;
  return files.filter(file => path.extname(file) === extension);
}

export {
  filteredNames,
};
