function objectKeys(object) {
  const arrContainingKeys = [];
  for (const key in object) {
    if ({}.hasOwnProperty.call(object, key)) {
      arrContainingKeys.push(key);
    }
  }

  return arrContainingKeys;
}

export { objectKeys };
