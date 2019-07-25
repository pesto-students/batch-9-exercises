import { formAttributes } from './formAttributes';

describe('checkHtml', () => {
  test('checks dom for validation', () => {
    const htmlDom = new DOMParser().parseFromString(formAttributes(), 'text/html');
    const firstNameElem = htmlDom.getElementsByName('firstname')[0];
    const hasFirstname = firstNameElem !== undefined;
    const disabledFirstName = firstNameElem.getAttribute('disabled') !== undefined;
    expect(hasFirstname).toBe(true);
    expect(disabledFirstName).toBe(true);

  });
});
