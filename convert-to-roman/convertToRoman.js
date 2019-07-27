/* eslint-disable guard-for-in */
const IntegerToRomanMap = {
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
  I: 1,
};
function convertToRoman(integer) {
  let romanEquivalent = '';
  let number = integer;
  for (const key in IntegerToRomanMap) {
    while (number >= IntegerToRomanMap[key]) {
      romanEquivalent += key;
      number -= IntegerToRomanMap[key];
    }
  }
  return romanEquivalent;
}

export { convertToRoman };
