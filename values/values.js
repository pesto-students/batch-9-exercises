
function values(object) {
  return Object.getOwnPropertyNames(object).map(key => object[key]);
}

export {
  values,
};
