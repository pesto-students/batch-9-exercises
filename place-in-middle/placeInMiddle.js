
function placeInMiddle(array1, array2) {
  const position = array1.length / 2;
  array1.splice(position, 0, ...array2);
  return array1;
}

export {
  placeInMiddle,
};
