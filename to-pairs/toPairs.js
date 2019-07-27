
function toPairs(obj) {
  const properties = Object.getOwnPropertyNames(obj);
  const flattenObject = properties.map(key => [key, obj[key]]);
  return flattenObject;
}

export {
  toPairs,
};
