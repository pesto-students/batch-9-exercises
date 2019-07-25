const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest
    .dontMock('fs');


describe('special class added to required elements', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });

    it('two elements have special class', () => {
        expect(document.getElementsByClassName('special').length).toEqual(2);
    })

    it('first span has special class', function () {
        expect(document.getElementsByTagName('span')[0].className).toEqual('special');
    });

    it('First paragraph has special class', function () {
        expect(document.getElementsByTagName('p')[0].className).toEqual('special');
    });
});