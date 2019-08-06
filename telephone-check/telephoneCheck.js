
function telephoneCheck(phoneNumber) {
  const usPhoneNumberRegex = /^(?:\+?1[- ]?)?\(([0-9]{3})\)[- ]?([0-9]{3})[- ]([0-9]{4})$/;
  return usPhoneNumberRegex.test(phoneNumber);
}

export {
  telephoneCheck,
};
