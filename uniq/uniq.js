function uniq(array) {
  // const map = new Map();
  // array.forEach(element => {
  //   console.log(element);
  //   if (map.get(element) === undefined) {
  //     console.log(Array.isArray(element));
  //     map.set(element, true);
  //   }
  // });
  // console.log(map);
  // const keys = map.keys();
  // const output = [];
  // for (let ele of keys) {
  //   output.push(ele);
  // }
  // console.log(output);
  // return output;
  const stringArray = array.map(ele => {
    if (Array.isArray(ele)) {
      return ele.toString;
    }
    if (String(ele) === 'NaN') {
      return 'NaN';
    }
    return ele;
  });
  return Array.from(new Set(stringArray));
}

export { uniq };

// uniq([[1], [1]]);
