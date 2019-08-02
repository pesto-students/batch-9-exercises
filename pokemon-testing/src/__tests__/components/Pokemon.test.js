import React from 'react';
import { shallow } from 'enzyme';

import Pokemon from '../../components/Pokemon';

describe('<Pokemon>', () => {
    const pokemonObj = Object.freeze({ name: 'bulbasaur', id: '1' });
    it('should shallow render component', () => {
        const wrapper = shallow(<Pokemon pokemon={pokemonObj} />);
        const li = wrapper.find('.pokemons__item');
        expect(li.length).toBe(1);
    });

    it('should have a paragraph with pokemon name', () => {
        const wrapper = shallow(<Pokemon pokemon={pokemonObj} />);
        const li = wrapper.find('p.pokemons__name');
        expect(li.length).toBe(1);
        expect(li.text()).toBe(pokemonObj.name);
    });

    it('should have a button ', () => {
        const wrapper = shallow(<Pokemon pokemon={pokemonObj} />);
        const button = wrapper.find('button.pokemons__sprite');
        expect(button.length).toBe(1);
    });

    it('should have a button and paragraph in correct sequence ', () => {
        const wrapper = shallow(<Pokemon pokemon={pokemonObj} />);
        const button = wrapper.find('li').childAt(0).type();
        const paragraph = wrapper.find('li').childAt(1).type();
        expect(button).toEqual("button");
        expect(paragraph).toEqual("p");
    });

    // it('should have a backgroundImage property', () => {
    //     const pokemonObj = { name: 'bulbasaur', id: '1' };
    //     const wrapper = shallow(<Pokemon pokemon={pokemonObj} />);
    //     const button = wrapper.find('button.pokemons__sprite');
    //     expect(button).toBe(1);
    // });
});