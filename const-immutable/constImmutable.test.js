import { constImmutable } from './constImmutable';

describe('constImmutable', () => {
  test('const object should have immutable properties', () => {
    expect(Object.isFrozen(constImmutable())).toBe(true);
  });
  test('throws error if reassigning value to an object property', () => {
    const reassignValue = () => {
      const object = constImmutable();
      object.password = 's3cret';
    };
    expect(() => reassignValue()).toThrow(Error);
  });
});
