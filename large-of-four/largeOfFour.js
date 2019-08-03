const biggestElement = (array) => {
  let biggest = array[0];
  for (const member of array) {
    if (biggest < member) {
      biggest = member;
    }
  }
  return biggest;
};

function largeOfFour(...args) {
  const maxArray = [];
  const flatArgs = args.reduce((accumulator, value) => accumulator.cconcat(value));
  for (const array of flatArgs) {
    maxArray.push(biggestElement(array));
  }
  return maxArray;
}

export {
  largeOfFour,
};
