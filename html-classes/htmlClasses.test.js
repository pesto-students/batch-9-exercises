import { htmlClasses } from './htmlClasses';

describe('checkHtml', () => {
  test('checks dom for validation', () => {
    const htmlDom = new DOMParser().parseFromString(htmlClasses(), 'text/html');
    const hasTwoTagsWithSpecial = htmlDom.getElementsByClassName('special')[1] !== undefined;
    expect(hasTwoTagsWithSpecial).toBe(true);
  });
});
