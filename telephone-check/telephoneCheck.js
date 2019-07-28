
function telephoneCheck(phoneNumber) {
  // eslint-disable-next-line no-useless-escape
  const US_PHONE_NO_REGEX = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/g;
  const isValidUSNumber = US_PHONE_NO_REGEX.test(phoneNumber);
  return isValidUSNumber;
}

export {
  telephoneCheck,
};
