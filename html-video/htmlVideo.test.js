import { htmlVideo } from './htmlVideo';

describe('htmlVideo', () => {
  test('should have one iframe', () => {
    const htmlDoc = htmlVideo();
    const iframes = htmlDoc.getElementsByTagName('iframe');
    expect(iframes.length)
      .toBe(1);
  });
});
