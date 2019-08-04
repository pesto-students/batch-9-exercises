/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');
jest
  .dontMock('fs');

describe('iframe exists', () => {
  document.documentElement.innerHTML = html.toString();
  const iframe = document.getElementsByTagName('iframe');
  test('', () => {
    expect(iframe.length).toBe(1);
  });
});
