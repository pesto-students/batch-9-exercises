
function without(array1, array2) {
  return array2.reduce((el) => {
    if (array1.indexOf(el) === -1) {
      array2.shift();
    }
    return array2;
  }, []);
}

export {
  without,
};
