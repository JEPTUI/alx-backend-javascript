const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber function', () => {
  it('should round and sum two integers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should round and sum an integer and a float', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should round and sum two floats', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should round and sum two floats with different decimal parts', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
