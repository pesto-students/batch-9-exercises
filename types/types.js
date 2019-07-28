const types = {
};

const UpperCaseFirst = text => text[0].toUpperCase() + text.slice(1);

const type = (element) => {
  if (typeof element === 'object') {
    if (Array.isArray(element)) {
      return 'Array';
    } else if (element instanceof Function) {
      return 'Function';
    } else if (element instanceof RegExp) {
      return 'RegExp';
    } else if (element instanceof Object) {
      return 'Object';
    }
    return UpperCaseFirst(`${element}`);
  }
  return UpperCaseFirst(typeof element);
};

export {
  types,
  type,
};
