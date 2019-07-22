function sortTwoBigInt(int1, int2) {
  if (int1.length >= int2.length) {
    return { int1, int2 };
  }
  return { int2, int1 };
}
function addTwoBigInt(int1, int2) {
  const { int1: biggerInt, int2: smallerInt } = sortTwoBigInt(int1, int2);
  let bigSum = '';
  let carry = 0;
  const lastIndexOfSmallerInt = smallerInt.length - 1;
  const differenceOfIntLengths = biggerInt.length - smallerInt.length;
  // addition till small BigInt
  for (let i = lastIndexOfSmallerInt; i >= 0; i -= 1) {
    const sum = Number(smallerInt[i]) + Number(biggerInt[differenceOfIntLengths + i]) + carry;
    bigSum = (sum % 10) + bigSum;
    carry = Number.parseInt(sum / 10, 10);
  }

  const remainingIndexesOfBigNumber = differenceOfIntLengths - 1;
  // addition for left overBigNumber
  for (let i = remainingIndexesOfBigNumber; i >= 0; i -= 1) {
    const sum = Number(biggerInt[i]) + carry;
    bigSum = (sum % 10) + bigSum;
    carry = Number.parseInt(sum / 10, 10);
  }

  if (carry !== 0) {
    bigSum = carry + bigSum;
  }
  return bigSum;
}
function addBigIntegers(string) {
  const [countString, ...bigIntegers] = string.split('\n');
  const count = Number(countString);
  let sum = bigIntegers[0];

  for (let i = 1; i < count; i += 1) {
    sum = addTwoBigInt(sum, bigIntegers[i]);
  }
  return sum;
}

export {
  addBigIntegers,
};
