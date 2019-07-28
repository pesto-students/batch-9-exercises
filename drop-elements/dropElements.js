
function dropElements(array, predicate) {
  if (!((typeof predicate === 'function'))) { throw new TypeError(`Expected predicated to be function \n Received:${predicate}`); }
  const result = [];
  let j = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (predicate(array[i])) {
      result[j] = (array[i]);
      j += 1;
    }
  }

  return result;
}

export {
  dropElements,
};
