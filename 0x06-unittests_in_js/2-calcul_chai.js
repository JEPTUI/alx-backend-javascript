function calculateNumber(type, a, b) {
  const rA = Math.round(a);
  const rB = Math.round(b);

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
      throw new Error('Invalid operation type');
  }
}

module.exports = calculateNumber;
