/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('SVG', () => {
  it('has svg element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const svg = document.getElementsByTagName('svg');
    expect(svg.length).toBe(1);
  });
});
