function mapFilterAndReduce(personObjects) {
  const filteredPersonObjects = personObjects.filter(
    object => object.firstName.length < 5
  );

  return filteredPersonObjects.reduce((finalObject, personObject) => {
    finalObject[personObject.firstName] = personObject.firstName.length;
    return finalObject;
  }, {});

  //can be done better with currying
}

export { mapFilterAndReduce };
