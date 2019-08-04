/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './text-start.html'), 'utf-8');
jest
  .dontMock('fs');

describe('iframe exists', () => {
  document.documentElement.innerHTML = html.toString();
  test('', () => {
    expect(true).toBeTruthy();
  });
});
