import { errorName, throwErrors } from './throwErrors';

describe('throwing errors', () => {
  test('throw a reference error correctly', () => {
    throwErrors();
    expect(errorName).toBe('ReferenceError');
  });
});
