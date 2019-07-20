
function convertToRoman(number) {
  let result = '';
  const numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumbers = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  for (let i = 0; i <= numbers.length; i++) {
    while (number % numbers[i] < number) {
      result += romanNumbers[i];
      number -= numbers[i];
    }
  }
  return result;
}

export {
  convertToRoman,
};
