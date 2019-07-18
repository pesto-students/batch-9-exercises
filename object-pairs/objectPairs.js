function objectPairs(obj) {
  let result = [];
  let i = 0;
  for (let key in obj) {
    result[i] = [key, obj[key]];
  }

  return result
}

export { objectPairs };
