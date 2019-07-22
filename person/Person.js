const add = (sum, num) => sum + Number(num);

class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const string = this.dateOfBirth.split('');
    return string.filter(Number).reduce(add, 0);
  }
}

export {
  Person,
};
