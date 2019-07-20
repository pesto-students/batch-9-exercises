/* eslint-disable no-mixed-operators */
/* eslint-disable no-bitwise */

const funhash = (s) => {
  let h = 0; const l = s.length; let
    i = 0;
  if (l > 0) {
    while (i < l) {
      h = (h << 5) - h + s.charCodeAt(i) | 0;
      i += 1;
    }
  }
  return h;
};

// (*)
// Follow the instructions and fill in the blank sections.
function User(username, password) {
  // set a username and password property on the user object that is created
  this.username = username;
  const encryptedPassword = funhash(password);
  Object.defineProperty(this, 'password', {
    value: encryptedPassword,
    enumerable: false,
  });
}

// create a method on User called `checkPassword`
// this method should take in a string and compare it to the object's password property
// return `true` if they match, otherwise return `false`
User.prototype.checkPassword = function checkPassword(password) {
  const hashedPassword = funhash(password);
  return this.password === (hashedPassword);
};

export {
  User,
};
