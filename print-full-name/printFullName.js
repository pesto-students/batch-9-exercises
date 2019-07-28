
function printFullName(nameObj = { first: 'not', last: 'there' }) {
  return `My name is ${nameObj.first} ${nameObj.last}`;
}

export {
  printFullName,
};
