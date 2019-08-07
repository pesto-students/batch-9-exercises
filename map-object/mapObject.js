
function mapObject(obj, cb) {
  return Object.keys(obj).reduce((accumulator, current) => ({
    ...accumulator,
    [current]: cb(obj[current]),
  }), {});
}

export {
  mapObject,
};
