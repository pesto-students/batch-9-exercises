const isEmpty = array => array.length === 0;


function xprod(array1, array2) {
  if ([array1, array2].some(isEmpty)) {
    return [];
  }

  return array1.reduce((result, item1) => {
    array2.forEach((item2) => {
      result.push([item1, item2]);
    });
    return result;
  }, []);
}

export {
  xprod,
};
