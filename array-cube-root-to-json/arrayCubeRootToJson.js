function isNumericArray(array) {
  return array.every((element) => {
    if (typeof element === 'string') {
      return Number.isSafeInteger(parseInt(element, 10));
    }
    return typeof element === 'number';
  });
}

function arrayCubeRootToJson(array) {
  if (!Array.isArray(array)) {
    throw Error(`Expected type array, received type ${typeof array}`);
  }
  if (!isNumericArray(array)) {
    throw Error('Each element of the array should be a number');
  }
  return array.reduce((acc, element) => ({
    ...acc,
    [element]: Math.cbrt(element),
  }), {});
}

export {
  arrayCubeRootToJson,
};
