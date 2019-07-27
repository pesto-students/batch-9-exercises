
function values(obj) {
  const resultMap = Object.getOwnPropertyNames(obj).map(key => obj[key]);
  return resultMap;
}

export {
  values,
};
