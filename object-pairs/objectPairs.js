function objectPairs(object) {
  const arrOfPairs = [];
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      const pair = [key, object[key]];
      arrOfPairs.push(pair);
    }
  }
  return arrOfPairs;
}

export { objectPairs };
