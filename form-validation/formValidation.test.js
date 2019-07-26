/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('fruit-start', () => {
  it('has input element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './fruit-start.html');
    const input = document.getElementsByTagName('input');
    expect(input.length).toBe(1);
  });
});
