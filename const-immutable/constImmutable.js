
function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword',
  };
  Object.freeze(account);
  try {
    account.password = 's3cret';
  } catch (error) {
    error.message = 'not allowed';
  }
  return account.password;
}

export {
  constImmutable,
};
