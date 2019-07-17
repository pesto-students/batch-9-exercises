function binaryToDecimal(number) {
  let decimal = 0;
  for (let i = 0; i < number.length; i += 1) {
    const power = number.length - i - 1;
    decimal += (number[i] * (2 ** power));
  }
  return decimal;
}

function binaryAgent(string) {
  const input = string.split(' ');
  let sentence = '';
  for (let i = 0; i < input.length; i += 1) {
    sentence += String.fromCharCode(binaryToDecimal(input[i]));
  }
  return sentence;
}

export {
  binaryAgent,
};
