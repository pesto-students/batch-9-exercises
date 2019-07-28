function uniq(array) {
  const stringArray = array.map(ele => {
    if (Array.isArray(ele)) {
      return ele.toString;
    }
    if (String(ele) === 'NaN') {
      return 'NaN';
    }
    return ele;
  });
  return Array.from(new Set(stringArray));
}

export { uniq };

// uniq([[1], [1]]);
