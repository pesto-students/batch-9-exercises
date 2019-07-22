/* eslint-disable no-param-reassign */
function objectInvert(obj) {
  return Object.entries(obj).reduce((result, [key, value]) => {
    result[value] = key;
    return result;
  }, {});
}

export {
  objectInvert,
};
