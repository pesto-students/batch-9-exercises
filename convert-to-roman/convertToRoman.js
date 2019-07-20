/* eslint-disable no-param-reassign */

function convertToRoman(num) {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(num)) { throw Error(` Expected Number. \n Received:${typeof num}`); }

  if (num >= 4000) { throw Error(`Number too big. \n Expected Range: 1 <= n <= 3999 . \n Received:${num}`); }

  const romanValues = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];
  const arabicValues = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  let result = '';


  for (let i = arabicValues.length - 1; num > 0; i -= 1) {
    while (num >= arabicValues[i]) {
      result += romanValues[i];
      num -= arabicValues[i];
    }
  }

  return result;
}

export {
  convertToRoman,
};
