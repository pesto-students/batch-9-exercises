const fs = require('fs');

const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

describe('Check if can access elements', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  test('check access to first child', () => {
    expect(document.getElementById('page').firstChild).toBeTruthy();
  });
  test('check access to last child', () => {
    expect(document.getElementById('page').lastChild).toBeTruthy();
  });
  test('check access to next sibling', () => {
    expect(document.getElementById('page').firstChild.nextSibling).toBeTruthy();
  });
  test('check access to previous sibling', () => {
    expect(document.getElementById('page').lastChild.previousSibling).toBeTruthy();
  });
  test('check access to parent element', () => {
    expect(document.body.parentElement).toBeTruthy();
  });
  test('check access to child group', () => {
    expect(document.getElementById('page').childNodes).toBeTruthy();
  });
});