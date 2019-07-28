const lessThan5Chars = object => object.firstName.length < 5;

const reduceToObject = (acc, val) => ({ ...acc, [val.firstName]: (val.firstName.length) });

function mapFilterAndReduce(avengers) {
  return avengers.filter(lessThan5Chars).reduce(reduceToObject, {});
}

export {
  mapFilterAndReduce,
};
