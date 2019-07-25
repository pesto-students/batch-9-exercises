/* eslint-disable no-undef */
/*
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './fruit-length.html'), 'utf8');

describe('fruit', () => {
  document.documentElement.innerHTML = html.toString();
  test('fruit', () => {
    expect(document.querySelector('input')).toBeTruthy();
  });
});
