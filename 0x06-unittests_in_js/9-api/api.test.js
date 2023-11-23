const request = require('request');
const { expect } = require('chai');
const app = require('./api');

describe('Index page', () => {
  let baseUrl;

  before((done) => {
    app.listen(7865, () => {
      baseUrl = 'http://localhost:7865';
      done();
    });
  });

  it('Correct status code?', (done) => {
    request.get(baseUrl, (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('Correct result?', (done) => {
    request.get(baseUrl, (error, response, body) => {
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });

  describe('Cart page', () => {
    it('Correct status code when :id is a number?', (done) => {
      request.get(`${baseUrl}/cart/12`, (error, response) => {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Correct status code when :id is NOT a number (=> 404)?', (done) => {
      request.get(`${baseUrl}/cart/hello`, (error, response) => {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });

  after(() => {
    app.close();
  });
});
