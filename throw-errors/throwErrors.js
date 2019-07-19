
// eslint-disable-next-line import/no-mutable-exports
let errorName = null;
try {
  // eslint-disable-next-line no-console
  console.log(errorName.error);
} catch (e) {
  errorName = 'ReferenceError';
}
export {
  errorName,
};
