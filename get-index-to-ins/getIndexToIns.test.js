import { getIndexToIns } from './getIndexToIns';

describe('getIndexToIns', () => {
  test('should return the correct output', () => {
    expect(getIndexToIns([10, 20, 30, 40, 50], 35)).toEqual(3);
    expect(getIndexToIns([10, 20, 30, 40, 50], 30)).toEqual(2);
    expect(getIndexToIns([40, 60], 50)).toEqual(1);
    expect(getIndexToIns([3, 10, 5], 3)).toEqual(0);
    expect(getIndexToIns([5, 3, 20, 3], 5)).toEqual(2);
    expect(getIndexToIns([2, 5, 10], 15)).toEqual(3);
    expect(getIndexToIns([], 15)).toEqual(3);
  });
  test('should return 0 for empty array', () => {
    expect(getIndexToIns([], 35)).toEqual(0);
  });
  test('should work for char array', () => {
    expect(getIndexToIns(['f', 'e', 'g', 'i', 'o'], 'a')).toEqual(0);
  });
});
