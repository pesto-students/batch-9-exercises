/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');
describe('vector', () => {
  document.documentElement.innerHTML = html.toString();
  test('vector', () => {
    expect(document.querySelectorAll('iframe').length).toBe(1);
  });
});
