
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return this.dateOfBirth
      .split('')
      .map(char => Number(char))
      .filter(number => !Number.isNaN(number))
      .reduce((acc, val) => acc + val, 0);
  }
}

export {
  Person,
};
