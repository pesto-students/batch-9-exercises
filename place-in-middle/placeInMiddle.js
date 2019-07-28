
function placeInMiddle(array, insertArray) {
  const mid = Math.floor(array.length / 2);
  array.splice(mid, 0, ...insertArray);
  return array;
}

export {
  placeInMiddle,
};
