const midPosition = array => Math.floor(array.length / 2);

function placeInMiddle(array1, array2) {
  const mid = midPosition(array1);
  array1.splice(mid, 0, ...array2);
  return array1;
}

export {
  placeInMiddle,
};
