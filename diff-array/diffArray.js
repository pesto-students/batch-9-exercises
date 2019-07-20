
function diffArray(firstArray, secondArray) {
  let difference = firstArray.filter(element => !secondArray.includes(element));
  difference = difference.concat(secondArray.filter(element => !firstArray.includes(element)));
  return difference;
}

export {
  diffArray,
};
