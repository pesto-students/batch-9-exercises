/**
 * @jest-environment jsdom
 */
const getInnerHTML = require('../utils');

describe('table', () => {
  it('has table elements', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './table.html');
    const table = document.getElementsByTagName('table');
    expect(table.length).toBe(1);
  });
  it('has thead element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './table.html');
    const thead = document.getElementsByTagName('thead');
    expect(thead.length).toBe(1);
  });
  it('has tbody element', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './table.html');
    const tbody = document.getElementsByTagName('tbody');
    expect(tbody.length).toBe(1);
  });
  it('has tr elements', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './table.html');
    const tr = document.getElementsByTagName('tr');
    expect(tr.length).toBe(10);
  });
  it('has th elements', async () => {
    document.documentElement.innerHTML = getInnerHTML(__dirname, './table.html');
    const th = document.getElementsByTagName('th');
    expect(th.length).toBe(4);
  });
});
