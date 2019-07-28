
function unnest(list) {
  return Array.from(list).reduce((acc, item) => acc.concat(item), []);
}

export {
  unnest,
};
