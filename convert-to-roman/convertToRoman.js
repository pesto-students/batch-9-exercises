const lookup = {
  M: 1000,
  CM: 900,
  D: 500,
  CD: 400,
  C: 100,
  XC: 90,
  L: 50,
  XL: 40,
  X: 10,
  IX: 9,
  V: 5,
  IV: 4,
  I: 1
};

function convertToRoman(integer) {
  let number = integer;
  if (typeof number !== "number") {
    throw Error("Argument is NaN");
  }

  let romanRepresentation = "";
  const lookupKeys = Object.keys(lookup);
  lookupKeys.forEach(i => {
    while (number >= lookup[i]) {
      romanRepresentation += i;
      number -= lookup[i];
    }
  });

  return romanRepresentation;
}

export { convertToRoman };
