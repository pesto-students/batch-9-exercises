import { isEven } from './isEven';

describe('isEven', () => {
  it('should return true if even number is sent as argument', () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(2)).toBe(true);
  });

  it('should return false if odd number is sent as argument', () => {
    expect(isEven(51)).toBe(false);
    expect(isEven(1)).toBe(false);
  });

  it('should throw for wrong inputs', () => {
    expect(() => isEven()).toThrow();
    expect(() => isEven('1')).toThrow();
    expect(() => isEven(false)).toThrow();
    expect(() => isEven(true)).toThrow();
    expect(() => isEven([true])).toThrow();
  });
});
