
function objectKeys(obj) {
  let keys = [];
  for (const key in obj) {
    if (Object.hasOwnProperty.bind(obj, key)) {
      keys = [...keys, key];
    }
  }
  return keys;
}

export {
  objectKeys,
};
