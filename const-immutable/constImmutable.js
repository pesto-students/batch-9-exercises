
function constImmutable(account) {
  Object.freeze(account);
  return account;
}

export {
  constImmutable,
};
