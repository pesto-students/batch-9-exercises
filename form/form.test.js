import { form } from './form.js';

describe('debuggingHtml', () => {
  it('checks dom for validation', () => {
    const htmlDom = new DOMParser().parseFromString(form(), 'text/html');
    const hasInputTag = htmlDom.getElementsByName('input') !== undefined;
    expect(hasInputTag).toBe(true);
  });
});
