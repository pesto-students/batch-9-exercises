import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pokemon from './Pokemon';

describe('<Pokemon/>', () => {
  test('', () => {
    expect(true).toBe(true);
  });

  test('matches the snapshot', () => {
    const tree = shallow(
      <Pokemon
        pokemon={{
          name: 'bulbasaur',
          url: 'https://pokeapi.co/api/v2/pokemon/1/'
        }}
      />
    );
    expect(toJson(tree)).toMatchSnapshot();
  });
});
