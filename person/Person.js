class Person {
  constructor(firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
  }

  addDobDigits() {
    const isNumber = character => Number.isNaN(Number(character));
    const numbersArray = this.dateOfBirth.split('').filter(char => !isNumber(char));
    const sumOfNumbers = numbersArray.reduce((acc, number) => acc + Number(number), 0);
    return sumOfNumbers;
  }
}
export {
  Person,
};
