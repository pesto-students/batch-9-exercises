/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('Strike Out', () => {
  it('has a strike tag', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const strike = document.getElementsByTagName('strike');
    expect(strike.length).toBe(1);
  });
});
