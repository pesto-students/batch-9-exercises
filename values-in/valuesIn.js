
function valuesIn(obj) {
  const resultMap = Object.getOwnPropertyNames(obj).map(key => obj[key]);
  const protoTypeObj = Object.getPrototypeOf(obj);
  Object.keys(protoTypeObj).forEach(value => resultMap.push(protoTypeObj[value]));
  return resultMap;
}

export {
  valuesIn,
};
