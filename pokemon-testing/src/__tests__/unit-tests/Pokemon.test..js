import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pokemon from '../../components/Pokemon';

describe('<Pokemon />', () => {
  test('matches the snapshot', () => {
    const props = { id: 1, name: 'bulbasaur' };
    const tree = shallow(<Pokemon pokemon={props} />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('renders correct image url', () => {
    const props = { id: 1, name: 'bulbasaur' };
    const pokemon = shallow(<Pokemon pokemon={props} />);
    const pokemonImageUrl = `url(https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.id}.png)`;
    const imageUrlOfPokemon = pokemon.find('button').props().style.backgroundImage;
    expect(imageUrlOfPokemon).not.toBe(undefined);
    expect(imageUrlOfPokemon).toEqual(pokemonImageUrl)
  });

  test('displays correct pokemon name', () => {
    const props = { id: 1, name: 'bulbasaur' };
    const pokemon = shallow(<Pokemon pokemon={props} />);
    const pokemonName = pokemon.find('.pokemons__name').text();
    expect(pokemonName).not.toBe(undefined);
    expect(pokemonName).toEqual(props.name);
  });
});
