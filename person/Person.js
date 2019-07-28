
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const numbers = this.dateOfBirth.replace(/[^0-9]/g, '');
    return numbers.split('').reduce((total, num) => total += parseInt(num, 10), 0);
  }
}

export {
  Person,
};
