function makeObjectPropertyImmutable(property, value) {
  Object.defineProperty(this, [property], {
    value,
    enumerable: true,
  });
}
function constImmutable() {
  const account = {
    username: 'pesto',
  };
  makeObjectPropertyImmutable.call(account, 'password', 'initialPassword');
  try {
    account.password = 's3cret';
  } catch (e) {
    console.error(e);
  }

  return account.password;
}

export {
  constImmutable,
};
