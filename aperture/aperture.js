function aperture(n, list) {
  if (n > list.length) {
    return [];
  }

  const tuples = [];
  for (let i = 0; i < list.length; i++) {
    if (i + n > list.length) {
      break;
    }
    tuples.push(list.slice(i, i + n));
  }
  return tuples;
}

export { aperture };

// console.log(aperture(3, [1, 2, 3, 4, 5, 6, 7]));
