/* eslint-disable no-else-return */

/* eslint-disable no-return-assign */
/* eslint-disable no-param-reassign */

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw TypeError('Only arrays are supported');
  }
  const proxy = new Proxy(array, {
    get(target, name) {
      if (typeof name !== 'string') {
        return Reflect.get(target, name);
      }
      const number = Number(name);
      if (Number.isNaN(number)) {
        return Reflect.get(target, number);
      }
      return target[number < 0 ? target.length + number : number];
    },
    set(target, name, value, receiver) {
      if (typeof name !== 'string') {
        return Reflect.set(target, name, value, receiver);
      }
      const number = Number(name);
      if (Number.isNaN(number)) {
        return Reflect.set(target, number, value);
      }
      target[number < 0 ? target.length + number : number] = value;
      return true;
    },
  });
  return proxy;
}

export {
  negativeIndex,
};
