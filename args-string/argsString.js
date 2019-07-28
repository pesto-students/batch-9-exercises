const replacer = text => searchValue => newValue => text.replace(searchValue, newValue);

function argsString(string, array) {
  let resultString = string;
  const searchValue = '{}';
  array.forEach((element) => {
    resultString = replacer(resultString)(searchValue)(element);
  });
  return resultString;
}

export {
  argsString,
};
