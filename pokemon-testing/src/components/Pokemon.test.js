import React from 'react';
import { shallow } from 'enzyme';

import Pokemon from './Pokemon';

describe('<Pokemon />', () => {
  test(' renders correctly', () => {
    const props = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      id: 0,
    };
    const wrapper = shallow(<Pokemon pokemon={{ pokemon: props }} />);
    expect(wrapper).toMatchSnapshot();
  });
  test('has <button />', () => {
    const props = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      id: 0,
    };
    const wrapper = shallow(<Pokemon pokemon={{ pokemon: props }} />);
    expect(wrapper.find('button')).toHaveLength(1);
  });
  test('has <p/>', () => {
    const props = {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/',
      id: 0,
    };
    const wrapper = shallow(<Pokemon pokemon={{ pokemon: props }} />);
    expect(wrapper.find('p').hasClass('pokemons__name')).toBeTruthy();
  });
});
