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

describe('svg element', () => {
    test('svg element exists', async () => {
        const svg = document.getElementsByTagName('svg');
        expect(svg.length).toBe(1);
    });
});

describe('polygon element', () => {
    test('polygon element exists in svg tag', async () => {
        const polygon = document.querySelector('svg polygon');
        expect(polygon).toBeTruthy();
    });
});