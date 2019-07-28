function union(array1, array2) {
  const set = new Set(array1);

  array2.forEach(element => set.add(element));
  // const values = set.values();

  return Array.from(set);
}

export { union };
