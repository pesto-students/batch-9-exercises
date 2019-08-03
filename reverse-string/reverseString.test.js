import { reverseString } from './reverseString';

describe('reverseString', () => {
  test('should reverse the string', () => {
    expect(reverseString('hello!')).toEqual('!olleh');
    expect(reverseString('')).toEqual('');
    expect(reverseString('Greetings from Earth')).toEqual('htraE morf sgniteerG');
  });
  test('throw TypeError if input not a string', () => {
    expect(() => { reverseString(123); }).toThrow(TypeError);
  });
});
