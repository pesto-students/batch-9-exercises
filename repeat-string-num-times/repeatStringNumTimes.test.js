import { repeatStringNumTimes } from './repeatStringNumTimes';

describe('repeatStringNumTimes', () => {
  test('should return the correct string', () => {
    expect(repeatStringNumTimes('*', 3)).toEqual('***');
    expect(repeatStringNumTimes('abc', 3)).toEqual('abcabcabc');
    expect(repeatStringNumTimes('abc', -2)).toEqual('');
  });
  test('throw Error if first argument not string', () => {
    expect(() => { repeatStringNumTimes(() => {}, 3); }).toThrow(TypeError);
    expect(() => { repeatStringNumTimes(12, 3); }).toThrow(TypeError);
  });
  test('throw error if second argument not a number', () => {
    expect(() => { repeatStringNumTimes('*', '3'); }).toThrow(TypeError);
    expect(() => { repeatStringNumTimes('abc', () => {}); }).toThrow(TypeError);
    expect(() => { repeatStringNumTimes('abc', null); }).toThrow(TypeError);
  });
});
