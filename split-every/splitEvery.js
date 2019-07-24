
// const isString = element => typeof element === 'string';

function splitEvery(index, array) {
  if (index === 0 || index === -1) {
    throw Error('Expected: index > 1, Recieved: < 1');
  }
  if (array.length === 0) {
    return [];
  }
  if (array.length <= index) {
    return [array];
  }
  // array logic
  // for (let i = 0; i < Math.ceil(array.length / index); i += 1) {

  // }
  return [];
}

export {
  splitEvery,
};
