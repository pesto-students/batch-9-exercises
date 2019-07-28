
function mapFilterAndReduce(userList) {
  const firstNameList = userList.map(user => user.firstName);
  const namesWithLengthLessThanFive = firstNameList.filter(name => name.length < 5);
  const mapOfObjectAndLength = namesWithLengthLessThanFive.reduce((obj, name) => (
    {
      [name]: name.length,
      ...obj,
    }
  ), {});
  return mapOfObjectAndLength;
}

export {
  mapFilterAndReduce,
};
