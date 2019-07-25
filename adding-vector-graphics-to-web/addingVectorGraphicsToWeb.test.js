/**
 * @jest-environment jsdom
 */
const fs = require('fs');

const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf-8');

jest.dontMock('fs');

describe('Check for loaded images', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
  });
  afterEach(() => {
    jest.resetModules();
  });
  it(('PNG image loaded'), () => {
    expect(document.getElementsByTagName('img')[0].getAttribute('src')).toBe('./star.png');
  });
  it(('SVG image loaded'), () => {
    expect(document.getElementsByTagName('img')[1].getAttribute('src')).toBe('./star.svg');
  });
})
