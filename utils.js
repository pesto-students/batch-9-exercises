const path = require('path');
const fs = require('fs');

module.exports = function getInnerHTML(dirname, filename) {
  const filePath = path.resolve(dirname, filename);
  const html = fs.readFileSync(filePath, 'utf8');
  return html;
};
