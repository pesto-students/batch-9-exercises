function values(object) {
  const enumerableValues = [];
  for (let key in object) {
    if (Array.isArray(object)) {
      enumerableValues.push(object[key]);
      return enumerableValues;
    } else if (object.hasOwnProperty(key)) {
      enumerableValues.push(object[key]);
    }
  }
  return enumerableValues;
}

export { values };
const obj = {
  a: 100,
  b: [1, 2, 3],
  c: { x: 200, y: 300 },
  d: 'D',
  e: null,
  f: undefined
};
console.log(values(obj).sort());

class C {
  constructor() {
    this.a = 100;
    this.b = 200;
  }
}
C.prototype.x = () => 'x';
C.prototype.y = 'y';
const cobj = new C();

console.log(values(cobj));
