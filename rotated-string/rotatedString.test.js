import { rotatedString } from './rotatedString';

describe('rotatedString', () => {
  it('rotatedString returns true for the given strings', () => {
    expect(rotatedString('abcde', 'cdeab')).toBeTruthy();
    expect(rotatedString('ABC', 'BCA')).toBeTruthy();
  });

  it('rotatedString returns false for the given strings', () => {
    expect(rotatedString('abcde', 'abcde')).toBeFalsy();
    expect(rotatedString('1234', '23s4')).toBeFalsy();
  });

  it('throws error when string sizes are not same.', () => {
    expect(() => rotatedString('abcde', 'abxcde')).toThrow();
  });
});
