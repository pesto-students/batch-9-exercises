import { objectPairs } from './objectPairs';

describe('objectPairs', () => {
  it('should return an array of arrays', () => {
    const obj = {
      hi: 'hi',
    };
    const result = objectPairs(obj);
    expect(Array.isArray(result)).toBe(true);
    expect(Array.isArray(result[0])).toBe(true);
  });
  it('should return key, value pairs that properly match the object\'s properties', () => {
    const obj = {
      x: 2,
      y: 5,
      z: 10,
    };
    const result = objectPairs(obj);
    expect(result).toEqual([['x', 2], ['y', 5], ['z', 10]]);
  });

  it('should return key, value pairs that properly match the object\'s properties and nested properties', () => {
    const obj = {
      x: 2,
      y: 5,
      z: 10,
      test: {
        a: {
          b: 1,
        },
      },
    };
    const result = objectPairs(obj);
    expect(result).toEqual([['x', 2], ['y', 5], ['z', 10], ['test', [['a', [['b', 1]]]]]]);
  });
});
