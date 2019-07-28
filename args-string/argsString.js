
const replacer = text => searchValue => newValue => text.replace(searchValue, newValue);

function argsString(string, array) {
  let result = string;
  const braces = '{}';
  array.forEach((element) => {
    result = replacer(result)(braces)(element);
  });
  return result;
}

export {
  argsString,
};
