const add = (accumulator, currentValue) => accumulator + currentValue;

function subtract(accumulator, item) {
  return accumulator - item;
}

function multiply(accumulator, item) {
  return accumulator * item;
}

function divide(accumulator, item) {
  return accumulator / item;
}

function modulus(accumulator, item) {
  return accumulator % item;
}

function applyOperator(operator, ...numbers) {
  if (!operator) {
    throw Error('No operator provided');
  }
  if (!numbers.length) {
    return 0;
  }
  let result;
  switch (operator) {
    case '+':
      result = numbers.reduce(add);
      break;
    case '-':
      result = numbers.reduce(subtract, 0);
      break;
    case '*':
      result = numbers.reduce(multiply);
      break;
    case '/':
      result = numbers.reduce(divide);
      break;
    case '%':
      result = numbers.reduce(modulus);
      break;
    default:
      throw Error('operator is not supported');
  }
  return result;
}

export {
  applyOperator,
};
