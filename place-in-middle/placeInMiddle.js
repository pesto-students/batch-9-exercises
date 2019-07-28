
function placeInMiddle(target, arr) {
  const middlePlace = Math.floor(target.length / 2);
  target.splice(middlePlace, 0, ...arr);
  return target;
}

export {
  placeInMiddle,
};
