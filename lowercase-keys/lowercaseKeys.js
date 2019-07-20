/* eslint-disable no-param-reassign */

function lowercaseKeys(object) {
  return Object.keys(object).reduce((accumulator, key) => {
    accumulator[key.toLowerCase()] = object[key];
    return accumulator;
  }, {});
}

export {
  lowercaseKeys,
};
