
const get = key => object => object[key];

function mapFilterAndReduce(array) {
  const names = array.map(object => get('firstName')(object));
  const filteredNames = names.filter(name => name.length < 5);
  return filteredNames.reduce((accumulator, name) => {
    const result = { ...accumulator };
    result[name] = name.length;
    return result;
  }, {});
}

export {
  mapFilterAndReduce,
};
