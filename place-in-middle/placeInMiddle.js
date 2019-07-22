
function placeInMiddle(originalArray, arrayToPush) {
  const sliceIndex = Math.floor(originalArray.length / 2);
  const slice1 = originalArray.slice(0, sliceIndex);
  const slice2 = originalArray.slice(sliceIndex);
  return [...slice1, ...arrayToPush, ...slice2];
}

export {
  placeInMiddle,
};
