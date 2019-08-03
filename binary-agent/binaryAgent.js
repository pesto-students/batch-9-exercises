const areBinaryNumbers = (string) => {
  const characters = string.split('');
  return characters.every(character => (parseInt(character, 10) === 0)
                                    || (parseInt(character, 10) === 1));
};

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
    const number = input[i];
    if (!areBinaryNumbers(number)) {
      throw Error(`Expected: String of binary characters, Received: ${number}`);
    } else {
      sentence += String.fromCharCode(binaryToDecimal(number));
    }
  }
  return sentence;
}

export {
  binaryAgent,
};
