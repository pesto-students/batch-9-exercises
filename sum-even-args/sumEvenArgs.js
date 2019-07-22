function isEvenNumber(num) {
  return (num % 2) === 0;
}
function addNumbers(num1, num2) {
  return num1 + num2;
}
function sumEvenArgs(...numbers) {
  const initialSum = 0;
  const evenIndexNumbers = numbers.filter((number, index) => isEvenNumber(index + 1));
  const requiredSum = evenIndexNumbers.reduce(addNumbers, initialSum);
  return requiredSum;
}

export {
  sumEvenArgs,
};
