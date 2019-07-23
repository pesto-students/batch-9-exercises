
  class Person {
    constructor(firstName, lastName, dateOfBirth) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    return `${this.name} says hello.`;
  }
}

  const empl = new Person('Nishant', 'Salhotra', '5/11/1994');

export {
  Person,
};
