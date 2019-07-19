
function isTriangle(...sides) {
  const isTriangleValid = ((sides[0] + sides[1]) > (sides[2]))
  && ((sides[1] + sides[2]) > (sides[0])) && ((sides[0] + sides[2]) > (sides[1]));

  return isTriangleValid;
}

export {
  isTriangle,
};
