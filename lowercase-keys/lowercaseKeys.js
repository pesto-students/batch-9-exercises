
function lowercaseKeys(obj) {
  return Object.keys(obj)
    .reduce((result, key) => {
      const descriptor = Object.getOwnPropertyDescriptors(obj, key);
      Object.defineProperty(result, key.toLocaleLowerCase(), descriptor[key]);
      return result;
    }, {});
}

export {
  lowercaseKeys,
};
