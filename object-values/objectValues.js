
function objectValues(obj) {
  let result = []
  let i = 0
  for ( let key in obj ) {
    result[i] = obj[key]
  }
  return result;
}

export {
  objectValues,
};
