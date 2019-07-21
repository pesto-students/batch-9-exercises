/* eslint-disable no-underscore-dangle */
const checkAccNumber = (number) => {
  const accountNumberLength = 6;
  return number.length === accountNumberLength;
};

const checkFirstName = (name) => {
  const minLength = 3;
  const maxLength = 20;
  return name.length >= minLength && name.length <= maxLength;
};

const checkLastName = (name) => {
  const lastNameRegex = /^[a-zA-Z]+$/;
  return lastNameRegex.test(name);
};

const checkvalidEmailId = (emailId) => {
  const emailIdRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailIdRegex.test(emailId);
};


function SavingsAccount(accountNumber, email, firstName, lastName) {
  if (!checkAccNumber(accountNumber)) {
    throw Error('Account Number must be a 6-digit number');
  }

  if (!checkFirstName(firstName)) {
    throw Error('First name must be between 3 and 20 characters long');
  }

  if (!checkLastName(lastName)) {
    throw Error('Last name must contain english alphabets only');
  }

  if (!checkvalidEmailId(email)) {
    throw Error('Invalid e-mail');
  }
  this._accountNumber = accountNumber;
  this._email = email;
  this._firstName = firstName;
  this._lastName = lastName;
  this.products = [];
}

export {
  SavingsAccount,
};
