const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber function', () => {
  describe('SUM operation', () => {
    it('should round and add two numbers', () => {
      const result = calculateNumber('SUM', 1.4, 4.5);
      expect(result).to.equal(6);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should round and subtract b from a', () => {
      const result = calculateNumber('SUBTRACT', 1.4, 4.5);
      expect(result).to.equal(-4);
    });
  });
});
