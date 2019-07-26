
function splitEvery(chunkSize, list) {
  if (chunkSize < 1) {
    throw new Error('Chunk size should be greater than 0.');
  }
  const chunkedList = [];
  let index = 0;
  while (index < list.length) {
    chunkedList.push(list.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunkedList;
}

export {
  splitEvery,
};
