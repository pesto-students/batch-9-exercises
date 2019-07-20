

function objectPairs(obj) {
  return Object.keys(obj).map((key) => {
    let flattenObj;
    if (typeof obj[key] === 'object') {
      flattenObj = [key, objectPairs(obj[key])];
    } else {
      flattenObj = [key, obj[key]];
    }
    return flattenObj;
  });
}

export { objectPairs };
