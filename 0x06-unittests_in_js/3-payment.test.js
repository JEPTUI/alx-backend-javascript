const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
	let calculateNumberStub;

	beforeEach(() => {
		calculateNumberStub = sinon.stub(Utils, 'calculateNumber')
	});
	afterEach(() => {
		calculateNumberStub.restore();
	});
	it('should call Utils.calculateNumber with correct arguments and log the sum', () => {
		calculateNumberStub.withArgs('SUM', 100, 20).returns(120);
		sendPaymentRequestToApi(100, 20);

		expect(calculateNumberStub.calledOnce).to.be.true;
		expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
	});
});
