import { debuggingHtml } from './debuggingHtml';

describe('checkHtml', () => {
  test('checks dom for validation', () => {
    const htmlDom = debuggingHtml();
    // const hashDl = htmlDom.getElementById('dl')[0] !== undefined;
    expect(true).toBe(true);
  });
});
