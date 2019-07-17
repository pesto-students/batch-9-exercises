
function applyOperator(operator, ...operands) {
  if (operator === undefined) {
    throw new Error('No operator found!');
  }
  if (!operands.length) {
    return 0;
  }
  switch (operator) {
    case '+': return operands.reduce((acc, val) => {
      const res = acc + val;
      return res;
    }, 0);
    case '-': return operands.reduce((acc, val) => {
      const res = acc - val;
      return res;
    }, 0);
    case '*': return operands.reduce((acc, val, index) => {
      if (index === 0) {
        return val;
      }
      const res = acc * val;
      return res;
    }, 0);
    case '/': return operands.reduce((acc, val, index) => {
      if (index === 0) {
        return val;
      }
      const res = acc / val;
      return res;
    }, 0);
    case '%': return operands.reduce((acc, val, index) => {
      if (index === 0) {
        return val;
      }
      const res = acc % val;
      return res;
    }, 0);
    default: return null;
  }
}

export {
  applyOperator,
};
