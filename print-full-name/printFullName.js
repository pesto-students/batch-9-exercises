
function printFullName({ first: firstName, last: lastName }) {
  const sentence = `My name is ${firstName} ${lastName}`;
  return sentence;
}

export {
  printFullName,
};
