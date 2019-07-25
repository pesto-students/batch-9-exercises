const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest
    .dontMock('fs');
describe('checks presence of list items', function () {
    beforeEach(() => {
        document.documentElement.innerHTML = html.toString();
    });

    afterEach(() => {
        // restore the original func after test
        jest.resetModules();
    });
    it('should have 4 li elements', () => {
        const listItems = document.getElementsByTagName('li');
        expect(listItems.length).toEqual(4);
    });
    it('should have Home as the first li element', () => {
        const anchor = document.querySelector('li a');
        expect(anchor.innerHTML).toEqual('Home');
    });
    it('should have Pictures as the second li element', () => {
        const anchor = document.querySelectorAll('li a');
        expect(anchor[1].innerHTML).toEqual('Pictures');
    });
    it('should have Projects as the third li element', () => {
        const anchor = document.querySelectorAll('li a');
        expect(anchor[2].innerHTML).toEqual('Projects');
    });
    it('should have Social as the fourth li element', () => {
        const anchor = document.querySelectorAll('li a');
        expect(anchor[3].innerHTML).toEqual('Social');
    });
});

// describe('checks anchor links', function () {

// });