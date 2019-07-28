
function chunkArrayInGroups(array, chunkSize) {
  let start = 0;
  let next = chunkSize;
  const result = [];
  for (let i = 0; i < (array.length / chunkSize); i += 1) {
    result.push(array.slice(start, next));
    start = next;
    next += chunkSize;
  }
  return result;
}

export {
  chunkArrayInGroups,
};
