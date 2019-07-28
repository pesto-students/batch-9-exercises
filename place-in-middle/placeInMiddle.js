
function placeInMiddle(array, insertArray) {
  const n = array.length / 2;
  array.splice(n, 0, ...insertArray);
  return array;
}

export {
  placeInMiddle,
};
