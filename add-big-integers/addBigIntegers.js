
const sortNumbers = (firstNumber, secondNumber) => {
  if (firstNumber.length > secondNumber.length) {
    return { big: firstNumber, small: secondNumber };
  }
  return { big: secondNumber, small: firstNumber };
};

const sumBigInts = (numbersObject) => {
  const { big: biggerNumber, small: smallerNumber } = numbersObject;
  let sum = '';
  let carry = 0;
  const lastPositionOfSmallerNum = smallerNumber.length - 1;
  const differenceOfLengths = biggerNumber.length - smallerNumber.length;
  for (let i = lastPositionOfSmallerNum; i >= 0; i -= 1) {
    const individualSummation = Number(smallerNumber[i])
    + Number(biggerNumber[differenceOfLengths + i]) + carry;
    sum = (individualSummation % 10) + sum;
    carry = Number.parseInt(individualSummation / 10, 10);
  }
  const leftOverIndices = differenceOfLengths - 1;
  for (let i = leftOverIndices; i >= 0; i -= 1) {
    const individualSummation = Number(biggerNumber[i]) + carry;
    sum = (individualSummation % 10) + sum;
    carry = Number.parseInt(individualSummation / 10, 10);
  }
  if (carry !== 0) {
    sum = carry + sum;
  }
  return sum;
};

function addBigIntegers(stringLiteral) {
  const values = stringLiteral.split('\n');
  const noOftimes = values[0];
  let BigSum = values[1];
  for (let i = 2; i <= noOftimes; i += 1) {
    BigSum = sumBigInts(sortNumbers(BigSum, values[i]));
  }
  return BigSum;
}

export {
  addBigIntegers,
};
