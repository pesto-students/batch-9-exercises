const calcGCD = (first, second) => (first ? calcGCD(second % first, first) : second);

const calcLCM = (first, second) => (first * second) / calcGCD(first, second);

function smallestCommons(array) {
  if (!Array.isArray(array)) {
    throw TypeError(`Expected: array type argument, Received: ${typeof array}`);
  }
  let sortedArray = array.sort((first, second) => first - second);
  for (let i = sortedArray[0]; i <= sortedArray[1]; i += 1) {
    sortedArray = [...sortedArray, i];
  }
  return sortedArray.reduce(calcLCM);
}

export {
  smallestCommons,
};
