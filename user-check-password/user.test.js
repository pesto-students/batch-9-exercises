import { User } from './user';

describe('User', () => {
  //updated test to improve the quality of security
  test('should return an object with the passed username and password when called with new', () => {
    const me = new User('Pesto', 'iamabeast');
    expect(me).toEqual({
      username: 'Pesto',
    });
  });

  test('should have a method that checks password and returns correct boolean result', () => {
    const me = new User('Pesto', 'iamabeast');
    const result1 = me.checkPassword('iamabeast');
    const result2 = me.checkPassword('iamnotabeast');
    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });
});
