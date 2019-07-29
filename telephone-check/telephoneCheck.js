function telephoneCheck(phoneNumber) {
  const openingBracketCount = phoneNumber
    .split('')
    .reduce((count, element) => (element === '(' ? count + 1 : count), 0);
  const closingBracketCount = phoneNumber
    .split('')
    .reduce((count, element) => (element === ')' ? count + 1 : count), 0);

  const isBracketBalanced = openingBracketCount === closingBracketCount;
  const regex = /^[1]?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  const isProperNumberFormat = regex.test(phoneNumber);
  return isBracketBalanced && isProperNumberFormat;
}

export { telephoneCheck };
