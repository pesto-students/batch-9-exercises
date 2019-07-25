
const fs = require('fs').promises;
const path = require('path');

describe('htmlVideo', () => {
  test('youtube video', async () => {
    const filepath = path.resolve(__dirname, 'index.html');
    const html = await fs.readFile(filepath, 'utf-8');
    document.documentElement.innerHTML = html;

    const iFrame = document.getElementsByTagName('iframe');

    expect(iFrame.length).toBe(1);
  });
})
