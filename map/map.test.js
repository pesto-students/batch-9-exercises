import { map } from './map';

describe('htmlVideo', () => {
  test('should have correct number of tags', () => {
    const htmlDoc = map();
    const images = htmlDoc.getElementsByTagName('img');
    const mapS = htmlDoc.getElementsByTagName('map');
    const areas = htmlDoc.getElementsByTagName('area');

    expect(images.length)
      .toBe(1);
    expect(mapS.length)
      .toBe(1);
    expect(areas.length).toBe(2);
  });
});
