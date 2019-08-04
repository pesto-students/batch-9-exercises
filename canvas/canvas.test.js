/**
* @jest-environment jsdom
*/

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

beforeAll(() => {
    document.documentElement.innerHTML = html.toString();
});

afterAll(() => {
    jest.resetModules();
});

describe('Canvas Element', () => {
    test('canvas exists', () => {
        const image = document.querySelectorAll('canvas');
        expect(image.length).toBe(1);
    });
});