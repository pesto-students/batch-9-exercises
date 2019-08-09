const app = require('../index.js');
const request = require('supertest');

describe('Test the root path', () => {
    test('It should get a response for the GET method', (done) => {
        request(app).get('/').then((response) => {
            expect(response.statusCode).toBe(200);
            done();
        });
    });
});