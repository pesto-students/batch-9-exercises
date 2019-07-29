
function aperture(chunkSize, array) {
  if (chunkSize > array.length) {
    return [];
  }
  const initialChunks = [];
  const requiredChunks = (array.length - chunkSize) + 1;
  for (let chunkFrom = 0; chunkFrom < requiredChunks; chunkFrom += 1) {
    const chunkTo = chunkFrom + chunkSize;
    const currentChunk = array.slice(chunkFrom, chunkTo);
    initialChunks.push(currentChunk);
  }
  return initialChunks;
}

export {
  aperture,
};
