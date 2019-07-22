function chunkArrayInGroups(arr, size) {
  const newArray = [];
  let position = 0;
  while (position < arr.length) {
    newArray.push(arr.slice(position, position += size));
  }
  return newArray;
}


export {
  chunkArrayInGroups,
};
