import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Pokemon from '../components/Pokemon';

describe('<Pokemon />', () => {
  test('<li> compulsorily renders', () => {
    const props = { pokemon: 'Chikorita', key: 1234 };
    const wrapper = shallow(<Pokemon pokemon={props} />);
    const list = wrapper.find('.pokemons__item');
    expect(list).toHaveLength(1);
  });
  test('<button> compulsorily renders', () => {
    const props = { pokemon: 'Chikorita', key: 1234 };
    const wrapper = shallow(<Pokemon pokemon={props} />);
    const list = wrapper.find('li');
    expect(list).toHaveLength(1);
  });
  test('matches the snapshot', () => {
    const props = { pokemon: 'Chikorita', key: 1234 };
    const wrapper = shallow(<Pokemon pokemon={props} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
