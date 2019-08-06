import { homeDir } from './homeDir';

describe('Home directory', () => {
  test("should match current user's home directory", () => {
    expect(homeDir()).toBe('/home/avinash');
  });
});
