const decimalToRomanMapping = {
  1000: 'M',
  900: 'CM',
  500: 'D',
  400: 'CD',
  100: 'C',
  90: 'XC',
  50: 'L',
  40: 'XL',
  10: 'X',
  9: 'IX',
  5: 'V',
  4: 'IV',
  1: 'I',
};
function convertToRoman(...args) {
  let decimalNumber = args[0];
  let romanized = '';
  const decimalAndRomanEntries = Object.entries(decimalToRomanMapping).reverse();
  let currentIndex = 0;
  while (decimalNumber > 0) {
    const [decimalBase, romanNumeral] = decimalAndRomanEntries[currentIndex];
    const quotient = Math.floor(decimalNumber / decimalBase);
    const remainder = decimalNumber % decimalBase;
    romanized += romanNumeral.repeat(quotient);
    decimalNumber = remainder;
    currentIndex += 1;
  }

  return romanized;
}

export {
  convertToRoman,
};
