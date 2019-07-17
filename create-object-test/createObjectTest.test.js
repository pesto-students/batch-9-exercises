function createObject(a, b) {
  return { fname: a, lname: b };
}

describe('createObject', () => {
  test('should return an object with fname and lname as key with values as passed to function', () => {
    expect(createObject('a', 'b')).toEqual({ fname: 'a', lname: 'b' });
  });
});
