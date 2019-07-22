import { promiseAllProps } from './promiseAllProps';

test('wait for fulfilled object properties ', () => {
  promiseAllProps({
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar'),
  }).then((result) => {
    expect(result).toEqual({ foo: 'foo', bar: 'bar' });
  });
});

test('works for empty object', () => {
  promiseAllProps().then((result) => {
    expect(result).toEqual({});
  });
});
test('works for non enumerable properties', () => {
  const obj = {
    foo: Promise.resolve('foo'),
    bar: Promise.resolve('bar'),
  };
  Object.defineProperty(obj, 'nonEnum', {
    value: Promise.resolve('nonEnum'),
    enumerable: false,
  });
  promiseAllProps(obj).then((result) => {
    expect(result).toEqual({ foo: 'foo', bar: 'bar', nonEnum: 'nonEnum' });
  });
});
