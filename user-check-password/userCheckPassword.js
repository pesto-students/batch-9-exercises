
function userCheckPassword(inputString) {
  if (inputString === this.password) {
    return true;
  }
  return false;
}

export {
  userCheckPassword,
};
