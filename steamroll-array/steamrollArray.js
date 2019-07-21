
function steamrollArray(array) {
  return array.reduce((acc, value) => {
    if (Array.isArray(value)) {
      return [...acc, ...steamrollArray(value)];
    }
    return [...acc, value];
  }, []);
}

export {
  steamrollArray,
};
