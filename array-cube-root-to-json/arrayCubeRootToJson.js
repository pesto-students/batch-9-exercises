function isNumericArray(array) {
  return array.every((element) => {
    if (typeof element === 'string') {
      return !Number.isNaN(parseInt(element, 10));
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

  return array.reduce((acc, element) => {
    acc = { ...acc, [element]: Math.cbrt(element) };
    return acc;
  }, {});
}

export {
  arrayCubeRootToJson,
};
