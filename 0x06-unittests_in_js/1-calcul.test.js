const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber function', () => {
  describe('sUM operation', () => {
    it('should round and add two numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('sUBTRACT operation', () => {
    it('should round and subtract b from a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });
  describe('dIVIDE operation', () => {
    it('should round and divide a by b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when dividing by 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });

  describe('invalid operation type', () => {
    it('should throw an error for an invalid operation type', () => {
      assert.throws(() => {
        calculateNumber('INVALID_OPERATION', 1.4, 4.5);
      }, Error);
    });
  });
});
