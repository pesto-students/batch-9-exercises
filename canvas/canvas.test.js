/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('canvas', () => {
  it('has canvas element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const canvas = document.getElementsByTagName('canvas');
    expect(canvas.length).toBe(1);
  });
});
