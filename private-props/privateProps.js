
function privateProps(args) {

  const target = {
    //_private: 'secret',
    public: 'hello',
    getPrivate: function getPrivate() {
      return this._private;
    }
  };

  Object.defineProperty(target, '_private', {value: 'secret', enumerable: false});

  const handler = {
    get: function(target, name) {
      return (
        name in target ? target[name] : 'No property'
      );
    },
    set: function(target, prop, value) {
      return
      if (prop.indexOf('_') === 0) {
        return new TypeError('/Cant set property ' + prop + '/');
      }
      else {
        target[prop] = value;
        return true;        
      }
    }
  };

  const proxy = new Proxy(target, handler);

  return proxy;
}

export {
  privateProps,
};
