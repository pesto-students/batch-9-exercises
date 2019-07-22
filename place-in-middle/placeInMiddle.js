const middle = array => Math.floor(array.length / 2);
const leftArray = array => array.filter((value, index, arr) => index < middle(arr));
const rightArray = array => array.filter((value, index, arr) => index >= middle(arr));

function placeInMiddle(originalArray, midArray) {
  return [...leftArray(originalArray), ...midArray, ...rightArray(originalArray)];
}

export {
  placeInMiddle,
};
