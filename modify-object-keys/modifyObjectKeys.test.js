import { modifyObjectKeys } from './modifyObjectKeys';

describe('modifyObjectKeys', () => {
  test('should modify object keys according to callback function', () => {
    expect(modifyObjectKeys({ FOO: true }, x => x.toLowerCase()).foo).toBe(true);
    expect(modifyObjectKeys({ foo: true }, x => x.toUpperCase()).FOO).toBe(true);
  });
});
