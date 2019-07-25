const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../form/index.html'), 'utf8');

jest
  .dontMock('fs');

describe('Check for HTML tags', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });
  it('form exists', () => {
    expect(document.getElementsByTagName('form')).toBeTruthy();
  });
  it('input element exists', () => {
    expect(document.getElementsByTagName('input')).toBeTruthy();
  });
  it(('max input value is 5'), () => {
    expect(document.getElementsByTagName('input')[0].getAttribute('max')).toBe('5');
  });
  it(('min input value is 1'), () => {
    expect(document.getElementsByTagName('input')[0].getAttribute('min')).toBe('1');
  });
});
