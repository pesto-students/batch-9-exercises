let errorName;
try {
  throw ReferenceError('ReferenceError');
} catch (error) {
  errorName = error.name;
}

function throwErrors(...args) {

}

export {
  throwErrors,
  errorName
};
