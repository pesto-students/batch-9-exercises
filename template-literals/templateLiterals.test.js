import { templateLiterals } from './templateLiterals';

describe('templateLiterals', () => {
  test('should return a string message', () => {
    expect(templateLiterals())
      .toBe('There are 4 people on the football team. Their names are Rooney, Ronaldo, Messi, Pogba.');
  });
  test('should concat names and return complete sentence', () => {
    expect(templateLiterals('Sumit', 'Navneet', 'Kanav', 'Jayamathan', 'Arfat'))
      .toBe('There are 5 people on the football team. Their names are Sumit, Navneet, Kanav, Jayamathan, Arfat.');
  });
});
