function binarySearch(collection, find) {
  let start = 0;
  let end = collection.length - 1;

  if (typeof find === 'number') {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (collection[mid] === find) {
        return mid;
      } else if (collection[mid] < find) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  }

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (collection[mid].key === find.key) {
      return mid;
    } else if (collection[mid].key < find.key) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}

export { binarySearch };
