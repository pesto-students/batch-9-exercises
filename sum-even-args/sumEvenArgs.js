
const isEven = number => number % 2 === 0;

const filterEvenNumbers = array => array.filter(isEven);

function sumEvenArgs(...inputArray) {
  const evenFilteredArray = filterEvenNumbers(inputArray);
  return evenFilteredArray.reduce((a, b) => a + b, 0);
}

export {
  sumEvenArgs,
};
