
function threeSum(arr, sum) {
  if (!Array.isArray(arr) || arr.length < 3) {
    throw Error(`Array Received is Invalid. Expected an array with atleast 3 elements. \n Received:${arr}`);
  }
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(sum)) {
    throw Error(`Expected Type of sum : Number \n Received Type:${typeof sum}`);
  }
  let triplet = null;
  for (let i = 0; i < arr.length - 2; i += 1) {
    for (let j = i + 1; j < arr.length - 1; j += 1) {
      for (let k = j + 1; k < arr.length; k += 1) {
        const triplteSum = arr[i] + arr[j] + arr[k];
        if (triplteSum === sum) {
          triplet = [arr[i], arr[j], arr[k]];
          return triplet;
        }
      }
    }
  }

  return triplet;
}
export {
  threeSum,
};
