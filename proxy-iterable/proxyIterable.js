
function proxyIterable(array) {
  const increment = (value) => {
    const mappedArray = array.map(element => element.increment(value));
    return mappedArray;
  }

  const foo = () => {
    array.map(element => element.foo());
  }

  array.increment = increment;
  array.foo = foo;
  const handler = {
    get(obj, key) {
      return Reflect.get(obj, key);
    },
  }
  const proxy = new Proxy(array, handler);
  return proxy;
}

export {
  proxyIterable,
};
