function truthCheck(collection, predicate) {
  return collection.reduce(
    (isTrue, object) => isTrue && Boolean(object[predicate]),
    true
  );
}

export { truthCheck };
