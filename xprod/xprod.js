
function xprod(array1, array2) {
  if (!array1.length || !array2.length) {
    return [];
  }
  const arr = [];
  array1.forEach((element1) => {
    array2.forEach((element2) => {
      arr.push([element1, element2]);
    });
  });
  return arr;
}

export {
  xprod,
};
