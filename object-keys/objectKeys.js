
function objectKeys(obj) {
  let keys = [];
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      keys = [...keys, key];
    }
  }
  return keys;
}

export {
  objectKeys,
};
