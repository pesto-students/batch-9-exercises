/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('HTML Video', () => {
  it('has iframe element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const iframe = document.getElementsByTagName('iframe');
    expect(iframe.length).toBe(1);
  });
});
