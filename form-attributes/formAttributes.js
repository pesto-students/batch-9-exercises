const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

function formAttributes() {
  return html;
}

export {
  formAttributes,
};
