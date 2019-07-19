/* eslint-disable no-param-reassign */

function lowercaseKeys(object) {
  Object.keys(object)
    // eslint-disable-next-line no-return-assign
    .map(key => object[(key.toLowerCase())] = object[key]);
  return object;
}

export {
  lowercaseKeys,
};
