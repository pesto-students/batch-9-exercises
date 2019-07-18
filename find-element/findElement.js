
function findElement(array, predicate) {
  let result
  for(let i = 0 ; i < array.length ; i++) {
    if(predicate(array[i]))
    {
      result = array[i]
      break
    }
  }
  return result;
}

export {
  findElement,
};
