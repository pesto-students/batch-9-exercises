const isEven = number => number % 2 === 0;

function sumEvenArgs(...numbers) {
  let result = 0;
  for (const number of numbers) {
    if (isEven(number)) {
      result += number;
    }
  }
  return result;
}

export {
  sumEvenArgs,
};
