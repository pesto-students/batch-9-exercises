const isCorrectAccountNumber = accNum => {
  return accNum.length === 6;
};

const isCorrectFirstNameOrLastName = name => {
  const nameMinLength = 3;
  const nameMaxLength = 20;
  const nameRegex = /^[a-zA-Z]+$/;
  return (
    nameMinLength < name.length &&
    name.length < nameMaxLength &&
    nameRegex.test(name)
  );
};

const isEmailCorrect = email => {
  const emailRegex = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;

  return emailRegex.test(email);
};

class SavingsAccount {
  constructor(accountNumber, email, firstName, lastName) {
    if (!isCorrectAccountNumber(accountNumber)) {
      throw Error('Account Number must be a 6-digit number');
    }
    if (!isEmailCorrect(email)) {
      throw Error('Invalid e-mail');
    }
    if (!isCorrectFirstNameOrLastName(firstName)) {
      throw Error('First name must be between 3 and 20 characters long');
    }
    if (!isCorrectFirstNameOrLastName(lastName)) {
      throw Error('Last name must contain english alphabets only');
    }
    this._accountNumber = accountNumber;
    this._email = email;
    this._firstName = firstName;
    this._lastName = lastName;
    this.products = [];
  }
}

export { SavingsAccount };

// const actualAccount = new SavingsAccount(
//   '123456',
//   'kohli@gmail.com',
//   'Virat',
//   'Kohli'
// );
// console.log(actualAccount);
