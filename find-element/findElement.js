function findElement(arr, callback) {
  let element;
  for (let i = 0; i < arr.length; i += 1) {
    if (callback(arr[i])) {
      element = arr[i];
      break;
    }
  }
  return element;
}

export { findElement };
