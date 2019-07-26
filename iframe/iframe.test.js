/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('iFrame', () => {
  it('has an iframe tag', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const iframe = document.getElementsByTagName('iframe');
    expect(iframe.length).toBe(1);
  });
});
