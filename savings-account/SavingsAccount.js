const validateFirstName = (firstName) => {
  const min = 3;
  const max = 20;
  return firstName.length > min && firstName.length < max;
};
const validateAccountNumber = (accountNumber) => {
  const allowedLength = 6;
  return accountNumber.length === allowedLength;
};

const validateLastName = (lastName) => {
  const regex = /^[a-zA-Z]+$/;
  return regex.test(lastName);
};

const validateEmail = (email) => {
  const regex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
  return regex.test(email);
};

function SavingsAccount(accountNumber, email, firstName, lastName) {
  if (!validateAccountNumber(accountNumber)) {
    throw Error('Account Number must be a 6-digit number');
  }
  if (!validateFirstName(firstName)) {
    throw Error('First name must be between 3 and 20 characters long');
  }

  if (!validateEmail(email)) {
    throw Error('Invalid e-mail');
  }

  if (!validateLastName(lastName)) {
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
