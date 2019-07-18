
function objectPairs(object) {
  const pairs = [];
  for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
      pairs.push([key, object[key]]);
    }
  }
  return pairs;
}

export {
  objectPairs,
};
