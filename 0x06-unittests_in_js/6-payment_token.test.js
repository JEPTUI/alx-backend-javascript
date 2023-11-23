const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((result) => {
        // Assert that the result is an object with the correct data
        assert.deepStrictEqual(result, { data: 'Successful response from the API' });
        // Call done to indicate that the test is complete
        done();
      })
      .catch((error) => {
        // If there is an error, fail the test
        done(error);
      });
  });

  it('should resolve with undefined when success is false', (done) => {
    getPaymentTokenFromAPI(false)
      .then((result) => {
        // Assert that the result is undefined
        assert.strictEqual(result, undefined);
        // Call done to indicate that the test is complete
        done();
      })
      .catch((error) => {
        // If there is an error, fail the test
        done(error);
      });
  });
});
