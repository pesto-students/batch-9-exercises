const fs = require('fs');

const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

describe('Check for changes to paragraph', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  test(('Paragrph element present'), () => {
    expect(document.getElementsByTagName('p')[0]).toBeTruthy();
  });
  test(('Paragrph element to have bold elements'), () => {
    expect(document.getElementsByTagName('b')).toBeTruthy();
  });
  test(('Bold elements are not highlighted'), () => {
    const highlighted = document.getElementsByTagName('mark')[0];
    expect(!highlighted.contains(highlighted)).toBe(True);
  });
  test(('Bold elements are not highlighted before mousehover'), () => {
    const highlighted = document.getElementsByTagName('mark')[0];
    expect(!(document.getElementsByTagName('mark')[0].contains(highlighted))).toBe(True);
  });
});