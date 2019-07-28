
function findElement(array, predicate) {
  let result;
  for (let i = 0; i < array.length; i += 1) {
    if (predicate(array[i])) {
      result = array[i];
      break;
    }
  }
  return result;
}

export {
  findElement,
};
