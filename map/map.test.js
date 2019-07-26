/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('map', () => {
  it('has map element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const map = document.getElementsByTagName('map');
    expect(map.length).toBe(1);
  });
  it('has image element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const image = document.getElementsByTagName('img');
    expect(image.length).toBe(1);
  });
  it('has area element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './index.html');
    const area = document.getElementsByTagName('area');
    expect(area.length).toBe(2);
  });
});
