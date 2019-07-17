
function isTriangle(...sides) {
  const b1 = sides[0] < (sides[1] + [sides[2]]);
  const b2 = sides[1] < (sides[0] + [sides[2]]);
  const b3 = sides[2] < (sides[0] + [sides[1]]);
  return (b1 && b2 && b3)
}

export {
  isTriangle,
};
