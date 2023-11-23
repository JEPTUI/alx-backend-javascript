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

  after(() => {
    // Cleanup or additional teardown if needed
    app.close();
  });
});
