
function mapObject(obj, condition) {
  const map = new Map(Object.entries(obj));
  const result = {};
  map.forEach((value, key) => {
    result[key] = condition(value);
  });
  return result;
}

export {
  mapObject,
};
