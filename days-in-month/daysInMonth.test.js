import { daysInMonth } from './daysInMonth';

describe('countDaysInMonth', () => {
  test('should return correct number of days', () => {
    expect(daysInMonth(2014, 4)).toBe(30);
    expect(daysInMonth(2016, 2)).toBe(29);
    expect(daysInMonth(2018, 2)).toBe(28);
  });

  test('should throw error when incorrect arguments are there', () => {
    expect(daysInMonth(2014, 40)).toThrow();
    expect(daysInMonth(2016, 770)).toThrow();
    expect(daysInMonth(2018, 2770)).toThrow();
  });
});
