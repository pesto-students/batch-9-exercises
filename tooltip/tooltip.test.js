/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('Tooltip', () => {
  it('has a abbr tag', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const tooltip = document.getElementsByTagName('abbr');
    expect(tooltip.length).toBe(1);
  });
});
