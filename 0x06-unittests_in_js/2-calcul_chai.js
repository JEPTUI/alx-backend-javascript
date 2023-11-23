const round = (number) => Math.round(number);

const calculateNumber = (type, a, b) => {
  const rA = round(a);
  const rB = round(b);

  switch (type) {
    case 'SUM':
      return rA + rB;
    case 'SUBTRACT':
      return rA - rB;
    case 'DIVIDE':
      if (rB === 0) {
        return 'Error';
      }
      return rA / rB;
    default:
      throw new Error('Invalid type');
  }
};

module.exports = calculateNumber;
