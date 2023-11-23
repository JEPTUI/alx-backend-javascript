const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM', () => {
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumberSpy was called with the correct arguments
    assert(calculateNumberSpy.calledWith('SUM', 100, 20));

    // Assert that the console.log was called with the correct message
    assert(consoleSpy.calledWith('The total is: 120'));

    // Restore the spies to their original state
    calculateNumberSpy.restore();
    consoleSpy.restore();
  });
});
