// function Person(firstName, lastName, dateOfBirth) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.dateOfBirth = dateOfBirth;
// }

// Person.prototype.addDobDigits = function addDobDigits() {
//   // Implementation
// };

class Person {
  constructor(_firstName, _lastName, _dateOfBirth) {
    this.firstName = _firstName;
    this.lastName = _lastName;
    this.dateOfBirth = _dateOfBirth;
  }

  addDobDigits() {
    const dobWithoutSlash = this.dateOfBirth
      .split('')
      .filter(char => char !== '/');
    return dobWithoutSlash.reduce(
      (sum, character) => sum + Number(character),
      0
    );
  }
}

export { Person };
