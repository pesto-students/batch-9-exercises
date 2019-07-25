/* eslint-disable no-undef */
/*
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('canvas', () => {
  document.documentElement.innerHTML = html.toString();
  test('canvas', () => {
    expect(document.querySelector('#canvas')).toBeTruthy();
  });
});
