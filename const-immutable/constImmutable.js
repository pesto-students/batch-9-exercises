
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };

  Object.defineProperty(account, 'password', {
    configurable: true,
    enumerable: true,
    Writable: false,
  });
  return account.password;
}

export {
  constImmutable,
};
