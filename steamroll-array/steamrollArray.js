
function steamrollArray(arr1) {
  const initialFlattenArr = [];
  const result = arr1.reduce((currentFlattenedArr, arrVal) => {
    // eslint-disable-next-line no-param-reassign
    if (Array.isArray(arrVal)) {
      const flattenedArr = steamrollArray(arrVal); // flattening the inner array recursively.
      const flatArr = currentFlattenedArr.concat(flattenedArr);
      return flatArr;
    }
    const flatArr = currentFlattenedArr.concat(arrVal);
    return flatArr;
  }, initialFlattenArr);
  return result;
}

export {
  steamrollArray,
};
