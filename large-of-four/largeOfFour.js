
function findLargest(array) {
  let largest = -Infinity;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > largest) { largest = array[i]; }
  }
  return largest;
}

function largeOfFour(arrayList) {
  const result = [];
  const listSize = arrayList.length;
  for (let i = 0; i < listSize; i += 1) {
    result.push(findLargest(arrayList[i]));
  }
  return result;
}

export { largeOfFour, findLargest };
