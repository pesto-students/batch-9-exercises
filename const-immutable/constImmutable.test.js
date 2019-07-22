import { constImmutable } from './constImmutable';

const account = {
  username: 'pesto',
  password: 'initialPassword',
};

describe('constImmutable', () => {
  test('const object should have immutable properties', () => {
    expect(Object.isFrozen(constImmutable())).toBe(true);
    expect((constImmutable(account))).toEqual(account);
  });
});
