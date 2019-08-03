
function sumAll(array) {
  const [firstNumber, secondNumber] = array;
  if (typeof firstNumber !== 'number' || typeof secondNumber !== 'number') {
    throw new TypeError(`Expected: two arguments of type number, Received: ${typeof firstNumber} ${typeof secondNumber}`);
  }
  let start = 0;
  let limit = 0;
  let sum = 0;
  if (firstNumber < secondNumber) {
    start = firstNumber;
    limit = secondNumber;
  } else {
    start = secondNumber;
    limit = firstNumber;
  }
  for (let i = start; i <= limit; i += 1) {
    sum += i;
  }
  return sum;
}

export {
  sumAll,
};
