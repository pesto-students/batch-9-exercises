
function setDefaultProperty(target,defaultValue) {
  const proxy = new Proxy(target, {
    get(object, property = defaultValue){
      if(object.hasOwnProperty(property)){
        return object[property]
      }
      return defaultValue;
    }
  });
  return proxy;
}

export {
  setDefaultProperty,
};
