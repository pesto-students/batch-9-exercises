const isNumberArray = list => list.every((el) => {
  if (typeof el === 'string') {
    return !Number.isNaN(parseInt(el, 10));
  }
  return typeof el === 'number';
});


function arrayCubeRootToJson(array) {
  if (!Array.isArray(array)) {
    throw Error('Input should be a array');
  }

  if (!isNumberArray(array)) {
    throw Error('Expected Array type of Numbers or numbers as Strings');
  }
  return array.reduce((acc, val) => ({ ...acc, [val]: Math.cbrt(val) }), {});
}

export {
  arrayCubeRootToJson,
};
