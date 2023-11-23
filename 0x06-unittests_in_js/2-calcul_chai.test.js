const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('should add two numbers when type is SUM', () => {
    const result = calculateNumber('SUM', 1.4, 4.5);
    expect(result).to.equal(6);
  });

  it('should subtract b from a when type is SUBTRACT', () => {
    const result = calculateNumber('SUBTRACT', 1.4, 4.5);
    expect(result).to.equal(-4);
  });

  it('should divide a by b when type is DIVIDE', () => {
    const result = calculateNumber('DIVIDE', 1.4, 4.5);
    expect(result).to.equal(0.2);
  });

  it('should return "Error" when trying to divide by 0', () => {
    const result = calculateNumber('DIVIDE', 1.4, 0);
    expect(result).to.equal('Error');
  });

  it('should throw an error for invalid type', () => {
    const invalidTypeCall = () => calculateNumber('INVALID_TYPE', 1.4, 4.5);
    expect(invalidTypeCall).to.throw('Invalid type');
  });
});
