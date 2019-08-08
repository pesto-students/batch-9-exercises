import { homeDir } from './homeDir';

describe('homeDir tests', () => {
  test('Print members of home directory', () => {
    const members = homeDir();
    expect(members).toBeTruthy();
  });
});
