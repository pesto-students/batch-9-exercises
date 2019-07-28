function constImmutable() {
  const account = {
    username: 'pesto',
    password: 'initialPassword'
  };
  Object.defineProperty(account, 'password', {
    writable: false
  });
  try {
    account.password = 's3cret';
  } catch (error) {
    console.log(error);
  }
  return account.password;
}

export { constImmutable };
