import { sudanFn } from './sudanFn';

describe('sudan function', () => {
  test('should implement sudan function correctly', () => {
    expect(sudanFn({ n: 0, x: 5, y: 8 })).toEqual(13);
    expect(sudanFn({ n: 1, x: 3, y: 4 })).toEqual(74);
    expect(sudanFn({ n: 2, x: 5, y: 1 })).toEqual(440);
    expect(sudanFn({ n: 2, x: 0, y: 2 })).toEqual(19);
  });

  test('throws error if all argument are negative', () => {
    expect(() => sudanFn({ n: -2, x: -1, y: -2 })).toThrow();
  });
});
