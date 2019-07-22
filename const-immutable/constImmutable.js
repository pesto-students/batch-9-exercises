function makeObjectPropertyImmutable(property, value) {
  Object.defineProperty(this, [property], {
    value,
    writable: false,
  });
}
function constImmutable() {
  const account = {
    username: 'pesto',
  };
  makeObjectPropertyImmutable.call(account, 'password', 'initialPassword');
  account.password = 's3cret';
  return account.password;
}

export {
  constImmutable,
};
