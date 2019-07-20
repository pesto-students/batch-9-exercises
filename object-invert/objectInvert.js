function objectInvert(obj) {
  return Object.entries(obj).reduce((result, [key, value]) => {
    // eslint-disable-next-line no-param-reassign
    result[value] = key;
    return result;
  }, {});
}

export {
  objectInvert,
};
