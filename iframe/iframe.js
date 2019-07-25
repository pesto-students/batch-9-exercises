const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
function iframe() {
  return html;
}

export {
  iframe,
};
