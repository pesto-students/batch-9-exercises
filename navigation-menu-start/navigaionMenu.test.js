/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('Navigation Menu', () => {
  it('has a Unordered List', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const ul = document.getElementsByTagName('ul');
    expect(ul.length).toBe(1);
  });
});
