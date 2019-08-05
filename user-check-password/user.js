function User(username, password) {
  this.username = username;
  this.password = password;
}
User.prototype.checkPassword = function checkPassword(input) {
  if (input === this.password) {
    return true;
  }
  return false;
};

export {
  User,
};
