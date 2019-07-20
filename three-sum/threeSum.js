
const addTwoNumbers = num1 => num2 => ({ numbers: [num1, num2], sum: num1 + num2 });

function threeSum(input, target) {
  if (!Array.isArray(input)) {
    throw TypeError('Expected Array for argument 1, received ' + typeof input);
  }

  if (typeof target !== 'number') {
    throw TypeError('Expected Number for argument 2, received ' + typeof input);
  }

  if (input.length < 3) {
    throw Error('Argument should contain at least 3 items');
  }
  let addition = {};
  for (let i = 0; i < input.length; i++) {
    const sum = addTwoNumbers(input[i]);
    for (let j = i + 1; j < input.length; j++) {
      addition = sum(input[j]);
      for (let k = j + 1; k < input.length; k++) {
        if (addition.sum + input[k] === target) {
          return [...addition.numbers, input[k]];
        }
      }
    }
  }
  return null;
}
export {
  threeSum,
};
