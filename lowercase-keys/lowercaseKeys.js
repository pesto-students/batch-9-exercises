function lowercaseKeys(object) {
  const lowercasedKeyObject = {};
  // Object.entries(object).forEach(
  //   ([key, value]) => (lowercaseKeys[key.toLowerCase()] = value)
  // );
  const keysInLowerCase = Object.keys(object).map(key => key.toLowerCase());
  const originalValues = Object.values(object);

  keysInLowerCase.forEach((key, index) => {
    lowercasedKeyObject[key] = originalValues[index];
  });
  return lowercasedKeyObject;
}

export { lowercaseKeys };
