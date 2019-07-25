/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(
  path.resolve(__dirname, './fruit-start.html'),
  'utf8'
);
describe('test', () => {
  document.documentElement.innerHTML = html.toString();
  test('nothing', () => {
    expect(true).toBe(true);
  });
});
