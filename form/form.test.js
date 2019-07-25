import { form } from './form';

describe('checkHtml', () => {
  test('checks dom for validation', () => {
    const htmlDom = new DOMParser().parseFromString(form(), 'text/html');
    const firstNameElem = htmlDom.getElementsByName('quantity')[0];
    const hasFirstname = firstNameElem !== undefined;
    expect(hasFirstname).toBe(true);
  });
});
