import { modifyObjectKeys } from './modifyObjectKeys';

describe('modifyObjectKeys', () => {
  test('should modify object keys according to callback function', () => {
    expect(modifyObjectKeys({ FOO: true }, x => x.toLowerCase()).foo).toBe(true);
    const object = {
      ABC: true,
      DEF: true,
      GHI: true,
      JKL: true,
    };
    const modifiedObject = modifyObjectKeys(object, x => x.toLowerCase());
    const keys = Object.keys(modifiedObject);
    for (const key of keys) {
      expect(modifiedObject[key]).toBe(true);
    }
  });
});
