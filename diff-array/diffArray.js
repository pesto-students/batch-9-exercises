
function diffArray(...args) {
  const firstArray = args[0];
  const secondArray = args[1];
  const differenceArray = [];
  for (const element in firstArray) {
    if (secondArray.indexOf(element) === -1) {
      differenceArray.push(element);
    }
  }
  return differenceArray;
}

export {
  diffArray,
};
