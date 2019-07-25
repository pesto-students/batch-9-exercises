import { iframe } from './iframe';

describe('checkHtml', () => {
  test('checks dom for validation', () => {
    const htmlDom = new DOMParser().parseFromString(iframe(), 'text/html');
    const iFrameTag = htmlDom.getElementsByTagName('iframe')[0];
    const hasIframeTag = iFrameTag !== undefined;
    const iframeSrcValue = iFrameTag.getAttribute('src')
    expect(hasIframeTag).toBe(true);
    expect(iframeSrcValue).toBe('https://pesto.tech');
  });
});
