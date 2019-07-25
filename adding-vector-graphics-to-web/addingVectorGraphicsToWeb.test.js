import { addingVectorGraphicsToWeb } from './addingVectorGraphicsToWeb';

describe('addingVectorsGraphicsToWeb', () => {
  test('should have two images', () => {
    const htmlDoc = addingVectorGraphicsToWeb();
    const images = htmlDoc.getElementsByTagName('img');
    expect(images.length)
      .toBe(2);
  });
});
