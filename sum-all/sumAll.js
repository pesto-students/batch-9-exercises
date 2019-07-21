const sumOfNNaturalNumbers = n => n * (n + 1) / 2;

function sumAll(numbers) {
  const [smallerNumber, BiggerNumber] = numbers.sort((a, b) => a - b);
  return sumOfNNaturalNumbers(BiggerNumber) - sumOfNNaturalNumbers(smallerNumber) + smallerNumber;
}

export {
  sumAll,
};
