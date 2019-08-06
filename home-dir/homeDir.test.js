import { homeDir } from './homeDir';

const os = require('os');

describe('Template Test', () => {
  test('Template Test', () => {
    expect(homeDir()).toBe(os.homedir());
  });
});
