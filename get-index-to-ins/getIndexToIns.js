
function getIndexToIns(...args) {
  const [array, number] = [...args];
  let position = array.length;
  const sortedArray = array.sort();
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
