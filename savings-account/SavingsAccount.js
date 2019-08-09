const hasCorrectAccountNumber = number => number.length === 6;

const hasCorrectEmail = (email) => {
  const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regex.test(email);
};

const hasAcceptableFirstName = (firstName) => {
  const status = (firstName.length >= 3 && firstName.length <= 20);
  return status;
};

const hasAcceptableLastName = (lastName) => {
  const regex = /^[a-z,A-Z]+$/g;
  return regex.test(lastName);
};

class SavingsAccount {
  constructor(accountNumber, email, firstName, lastName) {
    if (!hasCorrectAccountNumber(accountNumber)) {
      throw new Error('Account number must be a 6-digit number');
    }
    if (!hasCorrectEmail(email)) {
      throw new Error('Invalid e-mail');
    }
    if (!hasAcceptableFirstName(firstName)) {
      throw new Error('First name must be between 3 and 20 characters long');
    }
    if (!hasAcceptableLastName(lastName)) {
      throw new Error('Last name must contain english alphabets only');
    }
    /* eslint-disable no-underscore-dangle */
    this._accountNumber = accountNumber;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this.products = [];
  }
}

export {
  SavingsAccount,
};
