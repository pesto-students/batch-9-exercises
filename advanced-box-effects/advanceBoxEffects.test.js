const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
describe('always true', () => {
  document.documentElement.innerHTML = html.toString();
  test('test', () => {
    expect(true).toBe(true);
  });
});
