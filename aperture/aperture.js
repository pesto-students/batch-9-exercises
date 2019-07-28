
function aperture(chunkSize, array) {
  if (chunkSize > array.length) {
    return [];
  }
  let newArr = [];
  let start = 0;
  let end = chunkSize;
  while (start !== null) {
    const tempArr = array.slice(start, end);
    if (tempArr.length < chunkSize) {
      start = null;
    } else {
      newArr = [...newArr, tempArr];
      start += 1;
      end = start + chunkSize;
    }
  }
  return newArr;
}

export {
  aperture,
};
