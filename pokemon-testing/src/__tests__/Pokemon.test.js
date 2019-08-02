import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Pokemon from '../components/Pokemon';

describe('<Pokemon />', () => {
  test('matches the snapshot', () => {
    const pokemon = shallow(<Pokemon pokemon={{ id: 1, name: 'bulbasaur' }} />);
    expect(toJson(pokemon)).toMatchSnapshot();
  });
  test('should have a p Tag that displays pokemon name', () => {
    const pokemon = shallow(<Pokemon pokemon={{ id: 4, name: 'charmander' }} />);
    const pTag = pokemon.find('p');
    expect(pTag.text()).toBe('charmander');
  });
  test('should have a button Tag that has said pokemon\'s image', () => {
    const pokemon = shallow(<Pokemon pokemon={{ id: 7, name: 'squirtle' }} />);
    const buttonTag = pokemon.find('.pokemons__sprite');
    expect(buttonTag.prop('style')).toHaveProperty('backgroundImage', 'url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png)');
  });
});
