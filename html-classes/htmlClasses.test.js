/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('HTML Classes', () => {
  it('has a class', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const specialClass = document.getElementsByClassName('special');
    expect(specialClass.length).toBe(2);
  });
});
