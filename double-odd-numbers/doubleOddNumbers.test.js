import { doubleOddNumbers } from './doubleOddNumbers';

describe('doubleOddNumbers', () => {
  test('returns a new array of all odd numbers doubled', () => {
    expect(doubleOddNumbers([1, 2, 3, 4, 5])).toEqual([2, 6, 10]);
    expect(doubleOddNumbers([])).toEqual([]);
  });
  test('to throw when wrong set of argumnets wrong', () => {
    expect(() => doubleOddNumbers([1, 2, '4', '0', 'haha I am not a']).toThrow());
  });
});
