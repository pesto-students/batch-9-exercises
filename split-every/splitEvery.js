function splitEvery(splitSize, collection) {
  if (splitSize <= 0) {
    throw new Error("First argument can't be a non positive number.");
  }
  if (collection.length === 0) {
    return [];
  }
  const chunks = [];
  for (let i = 0; i < collection.length; i += splitSize) {
    const chunk = collection.slice(i, i + splitSize);
    chunks.push(chunk);
  }

  return chunks;
}

export { splitEvery };
