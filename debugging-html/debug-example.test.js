/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './debug-example.html'), 'utf8');

jest.dontMock('fs');

describe('ul', () => {
  it('ul exists', () => {
    expect(true).toBeTruthy();
  });
});
