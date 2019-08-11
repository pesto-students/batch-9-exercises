
function lowercaseKeys(inputObject) {
  const newObj = {};
  const inputObjectKeys = Object.keys(inputObject);
  inputObjectKeys.forEach((key) => {
    newObj[key.toLowerCase()] = inputObject[key];
  });
  return newObj;
}

export {
  lowercaseKeys,
};
