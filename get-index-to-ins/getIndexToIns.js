
function getIndexToIns(array, number) {
  let position = array.length;
  const sortedArray = array.sort((a, b) => a - b);
  for (const member of sortedArray) {
    if (number <= member) {
      position = sortedArray.indexOf(member);
      break;
    }
  }
  return position;
}

export {
  getIndexToIns,
};
