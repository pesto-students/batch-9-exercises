const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, './index.html'), 'utf8');

jest
    .dontMock('fs');

beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
});

afterEach(() => {
    // restore the original func after test
    jest.resetModules();
});

describe('form element', function () {

    it('should have a form element', function () {
        const form = document.getElementsByTagName('form');
        expect(form.length).toBeGreaterThan(0);
    });

    it('should have a form element with name quantityForm', function () {
        const quantityForm = document.querySelector('form[name=quantityForm]');
        expect(quantityForm).toBeTruthy();
    });
});

describe('input label', function () {
    it('should have a label with for attribute', () => {
        const label = document.querySelector('label[for=quantity]');
        expect(label).toBeTruthy();
    });

    it('should have a label with text', function () {
        const label = document.querySelector('label[for=quantity]');
        expect(label.innerHTML).toMatch("Quantity (between 1 and 5):");
    });
});

describe('quantity input', function () {
    it('should have the quantity input', function () {
        const quantityInput = document.querySelector('input[name=quantity][type=number]');
        expect(quantityInput).toBeTruthy();
    });

    it('should have min value as 2', function () {
        const quantityInput = document.querySelector('input[name=quantity][type=number]');
        expect(parseInt(quantityInput.getAttribute('min'), 10)).toEqual(2);
    });

    it('should have max value as 4', function () {
        const quantityInput = document.querySelector('input[name=quantity][type=number]');
        expect(parseInt(quantityInput.getAttribute('max'), 10)).toEqual(4);
    });
});

describe('submit button', function () {
    it('should have a submit button in the form', () => {
        const formSubmitButton = document.querySelector('form[name=quantityForm] input[type=submit]');
        expect(formSubmitButton).toBeTruthy();
    });
});