import { generatorIterable } from './generatorIterable';

describe('generatorIterable', () => {
  test('should be a generator function', () => {
    expect(generatorIterable.constructor.name).toBe('GeneratorFunction');
  });

  test('iterator.next returns an object with value and done properties', () => {
    const iterable = generatorIterable();
    const iterator = iterable[Symbol.iterator]();
    expect(iterator.next()).toEqual({
      value: 1,
      done: false,
    });
  });

  test('iteration should finish after value is 5', () => {
    const iterable = generatorIterable();
    const iterator = iterable[Symbol.iterator]();
    let value = iterator.next(); // 1
    value = iterator.next(); // 2
    value = iterator.next(); // 3
    value = iterator.next(); // 4
    value = iterator.next(); // 5
    expect(value).toEqual({ value: 5, done: false });
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
  test('iteration should finish after value is n', () => {
    const n = 10;
    const iterable = generatorIterable(n);
    const iterator = iterable[Symbol.iterator]();
    let value = iterator.next(); // 1
    value = iterator.next(); // 2
    value = iterator.next(); // 3
    value = iterator.next(); // 4
    value = iterator.next(); // 5
    value = iterator.next(); // 6
    value = iterator.next(); // 7
    value = iterator.next(); // 8
    value = iterator.next(); // 9
    value = iterator.next(); // 10
    expect(value).toEqual({ value: 10, done: false });
    expect(iterator.next()).toEqual({ value: undefined, done: true });
  });
});
