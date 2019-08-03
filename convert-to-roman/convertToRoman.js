function convertToRoman(input) {
  let decimalNumber = input;
  if (!Number.isFinite(decimalNumber)) {
    throw TypeError('Input is not a countable number');
  }
  const romanKeys = {
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
  let romanNumber = '';
  const keysArray = Object.keys(romanKeys);
  keysArray.forEach((key) => {
    while (decimalNumber >= romanKeys[key]) {
      romanNumber += key;
      decimalNumber -= romanKeys[key];
    }
  });
  return romanNumber;
}

export {
  convertToRoman,
};
