
class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const numberStrings = this.dateOfBirth.match(/\d+/g);
    const dobDigits = numberStrings.join('').split('').map(Number);
    return dobDigits.reduce((a, b) => a + b, 0);
  }
}

export {
  Person,
};
