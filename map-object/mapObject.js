
function mapObject(obj, fn) {
  const result = {};
  for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
      result[key] = fn(obj[key]);
    }
  }
  return result;
}

export {
  mapObject,
};
