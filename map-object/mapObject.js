
function mapObject(obj, fn) {
  // eslint-disable-next-line prefer-const
  let result = {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      result[key] = fn(obj[key]);
    }
  }
  return result;
}

export {
  mapObject,
};
