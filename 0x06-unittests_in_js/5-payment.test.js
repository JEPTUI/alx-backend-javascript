const assert = require('assert');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('should log the correct message and be called once for 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);

    // Assert that the console.log was called with the correct message
    assert(consoleSpy.calledWith('The total is: 120'));

    // Assert that the console.log was called only once
    assert.strictEqual(consoleSpy.callCount, 1);
  });

  it('should log the correct message and be called once for 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);

    // Assert that the console.log was called with the correct message
    assert(consoleSpy.calledWith('The total is: 20'));

    // Assert that the console.log was called only once
    assert.strictEqual(consoleSpy.callCount, 1);
  });
});
