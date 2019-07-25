const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './debug-example.html'), 'utf8');
function debuggingHtml() {
  return html;
}

export {
  debuggingHtml,
};
