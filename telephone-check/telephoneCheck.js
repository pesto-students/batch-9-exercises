const hasBalancedBrackets = (phoneNumber) => {
  let bracketCount = 0;
  const phoneNumberArray = phoneNumber.split('');
  phoneNumberArray.forEach((character) => {
    if (character === '(') {
      bracketCount += 1;
    } else if (character === ')') {
      bracketCount -= 1;
    }
  });
  return !bracketCount;
};

const isAmericanNumber = (phoneNumber) => {
  const regex = /^[1]?[-\s.]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/g;
  const isAmerican = regex.test(phoneNumber);
  return isAmerican;
};

function telephoneCheck(telephoneNumber) {
  return hasBalancedBrackets(telephoneNumber) && isAmericanNumber(telephoneNumber);
}

export {
  telephoneCheck,
};
