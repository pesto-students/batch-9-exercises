const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

describe('sample test', () => {
  it('should be true', () => {
    expect(true).toBe(true);
  });
});
