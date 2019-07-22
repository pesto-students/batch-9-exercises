
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const dobArray = this.dateOfBirth.split('/');
    const digitArrayInString = dobArray.join('').split('');
    // eslint-disable-next-line max-len
    const addedSum = digitArrayInString.reduce((accumulator, numberInString) => accumulator + parseInt(numberInString, 10), 0);
    return addedSum;
  }
}

export {
  Person,
};
