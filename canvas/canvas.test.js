/**
 * @jest-environment jsdom
 */

/* import-globals-from index.html */
const fs = require('fs');

const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

describe('Check if canvas loads', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  it(('Canvas element present'), () => {
    expect(document.getElementsByTagName('canvas')[0]).toBeTruthy();
  });
});
