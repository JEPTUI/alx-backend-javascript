const assert = require('assert');
const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use a stub for Utils.calculateNumber and a spy for console.log', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consoleSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Assert that calculateNumberStub was called with the correct arguments
    assert(calculateNumberStub.calledWith('SUM', 100, 20));

    // Assert that the console.log was called with the correct message
    assert(consoleSpy.calledWith('The total is: 10'));

    // Restore the stub and spy to their original state
    calculateNumberStub.restore();
    consoleSpy.restore();
  });
});
