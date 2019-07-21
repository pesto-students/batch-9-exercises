
function telephoneCheck(phoneNumber) {
  const usaTelephoneNumberRegex = /^(?:\+?1[- ]?)?\(([0-9]{3})\)[- ]?([0-9]{3})[- ]([0-9]{4})$/;
  return usaTelephoneNumberRegex.test(phoneNumber);
}

export {
  telephoneCheck,
};
