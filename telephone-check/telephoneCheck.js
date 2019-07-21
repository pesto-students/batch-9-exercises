
function telephoneCheck(string) {
  let result = false;
  const telephoneNumber = string.replace(/[^\d]/g, '');
  if (telephoneNumber.length === 10 || (telephoneNumber[0] === '1')) {
    result = true;
  }
  return result;
}

export {
  telephoneCheck,
};
