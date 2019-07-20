function areBracketsBalanced(string, types) {
  const openingCount = string.split('').reduce((total, element) => (element === types.opening ? total + 1 : total), 0);
  const closingCount = string.split('').reduce((total, element) => (element === types.closing ? total + 1 : total), 0);
  return openingCount === closingCount;
}
function telephoneCheck(string) {
  if (!areBracketsBalanced(string, { opening: '(', closing: ')' })) {
    return false;
  }
  const phoneRegex = /^[1]?[-\s\.]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  return phoneRegex.test(string);
}
export {
  telephoneCheck,
};
