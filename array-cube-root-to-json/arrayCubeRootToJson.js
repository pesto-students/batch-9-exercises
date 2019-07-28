const isNumbersArray = list => list.every((el) => {
  if (typeof el === 'string') {
    return !Number.isNaN(parseInt(el, 10));
  }
  return typeof el === 'number';
});

function arrayCubeRootToJson(array) {
  if (!Array.isArray(array)) {
    throw new Error('Passed argument should be an array');
  }
  if (!isNumbersArray(array)) {
    throw new Error('Array should contain numbers or numbers as strings ');
  }
  return array.reduce((acc, val) => ({ ...acc, [val]: Math.cbrt(val) }), {});
}

export {
  arrayCubeRootToJson,
};
