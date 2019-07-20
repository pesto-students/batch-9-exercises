
function getIndexToIns(arr, num) {
  let tempArrPos = 0;
  arr.forEach((value) => {
    if (value > num) { tempArrPos += 1; }
  });
  return tempArrPos;
}

export {
  getIndexToIns,
};
