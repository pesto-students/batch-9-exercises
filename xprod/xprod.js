function xprod(firstArray, secondArray) {
  if ([firstArray, secondArray].some(array => array.length === 0)) {
    return [];
  }

  return firstArray.reduce((modifiedArray, item1) => {
    secondArray.forEach(item2 => {
      modifiedArray.push([item1, item2]);
    });
    return modifiedArray;
  }, []);
}

export { xprod };
