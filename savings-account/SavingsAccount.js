/* eslint-disable no-underscore-dangle */
const isCorrectFirstName = (firstName) => {
  const firstNameMinLength = 3;
  const firstNameMaxLength = 20;
  return firstNameMinLength < firstName.length && firstName.length < firstNameMaxLength;
};
const isCorrectAccountNumber = (accountNumber) => {
  const accountNumberLength = 6;
  return accountNumber.length === accountNumberLength;
};

const isCorrectLastName = (lastName) => {
  const lastNameRegex = /^[a-zA-Z]+$/;
  return lastNameRegex.test(lastName);
};

const isCorrectEmail = (email) => {
  const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  return emailRegex.test(email);
};

function SavingsAccount(accountNumber, email, firstName, lastName) {
  if (!isCorrectAccountNumber(accountNumber)) {
    throw Error('Account Number must be a 6-digit number');
  }
  if (!isCorrectFirstName(firstName)) {
    throw Error('First name must be between 3 and 20 characters long');
  }

  if (!isCorrectEmail(email)) {
    throw Error('Invalid e-mail');
  }

  if (!isCorrectLastName(lastName)) {
    throw Error('Last name must contain english alphabets only');
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
