import { formAttributes } from './formAttributes';

describe('debuggingHtml', () => {
  it('checks dom for validation', () => {
    const htmlDom = new DOMParser().parseFromString(formAttributes(), 'text/html');
    const hasInputTag = htmlDom.getElementsByName('input') !== undefined;
    expect(hasInputTag).toBe(true);
  });
});
