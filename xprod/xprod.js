
function xprod(firstList, secondList) {
  if (firstList.length === 0 || secondList.length === 0) {
    return [];
  }
  return firstList.reduce((acc, val1) => {
    secondList.forEach((val2) => {
      acc.push([val1, val2]);
    });
    return acc;
  }, []);
}

export {
  xprod,
};
