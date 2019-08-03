import { pairwise } from './pairwise';

describe('pairwise', () => {
  test('should return the correct output', () => {
    expect(pairwise([1, 4, 2, 3, 0, 5], 7)).toBe(11);
    expect(pairwise([1, 3, 2, 4], 4)).toBe(1);
    expect(pairwise([1, 1, 1], 2)).toBe(1);
    expect(pairwise([0, 0, 0, 0, 1, 1], 1)).toBe(10);
    expect(pairwise([], 100)).toBe(0);
  });
  test('throw if input not an array of numbers', () => {
    expect(() => { pairwise({}, 52); }).toThrow(TypeError);
    expect(() => { pairwise(() => {}, 52); }).toThrow(TypeError);
    expect(() => { pairwise(null, 0)}).toThrow(TypeError);
  });
  test('throw if second argument not a number', () => {
    expect(() => { pairwise([1, 2, 3, 4, 5], undefined); }).toThrow(TypeError);
    expect(() => { pairwise([2, 3, 5], null); }).toThrow(TypeError);
  });
});
