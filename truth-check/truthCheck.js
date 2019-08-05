function truthCheck(collection, predicate) {
  if (typeof predicate !== 'string') {
    throw TypeError(`Expected: Second argument of type string, Received: ${typeof predicate}`);
  }
  const truthy = collection.every(member => member[predicate]);
  return truthy;
}

export {
  truthCheck,
};
