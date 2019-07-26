/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('HTML Text Formatting', () => {
  it('has a body', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './text-start.html');
    const body = document.getElementsByTagName('body');
    expect(body.length).toBe(1);
  });
});
