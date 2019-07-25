import { formAttributes } from './formAttributes';

describe('checkHtml', () => {
  test('checks dom for validation', () => {
    const htmlDom = new DOMParser().parseFromString(formAttributes(), 'text/html');
    const hasFirstname = htmlDom.getElementsByName('firstname') !== undefined;
    expect(hasFirstname).toBe(true);
  });
});
