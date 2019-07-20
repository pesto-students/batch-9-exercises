
function telephoneCheck(telephoneNumber) {
  // src: https://www.oreilly.com/library/view/regular-expressions-cookbook/9781449327453/ch04s02.html
  const usaTelephoneNumberRegex = /^(?:\+?1[- ]?)?\(([0-9]{3})\)[- ]?([0-9]{3})[- ]([0-9]{4})$/;
  return usaTelephoneNumberRegex.test(telephoneNumber);
}

export {
  telephoneCheck,
};
