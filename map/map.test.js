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

describe('Image Element', () => {
    test('image exists', () => {
        const image = document.querySelectorAll('img[usemap="#logos"]');
        expect(image.length).toBe(1);
    });
});

describe('Map Element', () => {
    test('map tag exists in image tag', () => {
        const map = document.querySelectorAll('map[name=logos]');
        expect(map.length).toBe(1);
    });
});