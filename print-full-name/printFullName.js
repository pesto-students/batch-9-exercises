function get(attr) {
  return function (object) {
    return object[attr];
  };
}


function printFullName(obj) {
  const first = get('first')(obj);
  const last = get('second')(obj);
  return `My name is ${first} ${last}`;
}

export {
  printFullName,
};
