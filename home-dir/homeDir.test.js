import { homeDir } from './homeDir';

describe('Home directory', () => {
  test('is /home/piyush', () => {
    expect(homeDir()).toBe('/home/piyush');
  });
});
