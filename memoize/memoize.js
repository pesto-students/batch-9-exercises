
function memoize(func) {
  const cache = {};
  return (...conditions) => {
    let output = 0;
    const stringConditions = conditions.toString();
    if (Object.prototype.hasOwnProperty.call(cache, stringConditions)) {
      output = cache[stringConditions];
    } else {
      cache[stringConditions] = func(...conditions);
      output = cache[stringConditions];
    }
    return output;
  };
}

export {
  memoize,
};
