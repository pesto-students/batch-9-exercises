const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
function addingVectorGraphicsToWeb() {
  // eslint-disable-next-line no-undef
  const docObject = new DOMParser().parseFromString(html, 'text/html');
  return docObject;
}

export {
  addingVectorGraphicsToWeb,
};
