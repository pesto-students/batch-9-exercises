const filterByFirstName = obj => obj.firstName.length < 5;
const reduceObj = (acc, element) => {
  acc[element.firstName] = element.firstName.length;
  return acc;
};

function mapFilterAndReduce(array) {
  return array.filter(filterByFirstName).reduce(reduceObj, {});
}

export {
  mapFilterAndReduce,
};
