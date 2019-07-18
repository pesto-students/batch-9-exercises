function dropElements(array, acceptanceFunction) {
  return array.filter(element => acceptanceFunction(element));
}

export { dropElements };
