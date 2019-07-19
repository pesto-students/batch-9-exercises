
// eslint-disable-next-line import/no-mutable-exports
let errorName;

try {
  throw new ReferenceError('');
}
catch (error) {
  errorName = error.name;
}

export {
  errorName,
};
