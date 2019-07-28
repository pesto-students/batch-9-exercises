
function curry(fn) {
  const { length } = fn;
  let collection = [];
  function loop(count) {
    return (...num) => {
      collection.push(...num);
      if (collection.length === length) {
        const finalParams = collection;
        collection = [];
        count = 0;
        return fn(...finalParams);
      }
      return loop(count - 1);
    };
  }
  return loop(length);
}

export {
  curry,
};
