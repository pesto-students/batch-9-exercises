import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from '../../containers/Page/Page';
import Pokemon from '../../components/Pokemon';

describe('<Page />', () => {
  describe('matches the snapshot', () => {
    test('when isFetched is true', () => {
      const fetchPokemons = jest.fn();
      const filterPokemons = jest.fn();
      const props = {
        page: {
          isFetched: true,
          displayedPokemons: [],
        },
        pageActions: {
          fetchPokemons,
          filterPokemons,
        },
      };
      const tree = shallow(<Page {...props} />);
      expect(toJson(tree)).toMatchSnapshot();
    });

    test('when isFetched is false', () => {
      const fetchPokemons = jest.fn();
      const filterPokemons = jest.fn();
      const props = {
        page: {
          isFetched: false,
          displayedPokemons: [{ id: 1, name: 'balbasaur' }],
        },
        pageActions: {
          fetchPokemons,
          filterPokemons,
        },
      };
      const tree = shallow(<Page {...props} />);
      expect(toJson(tree)).toMatchSnapshot();
    });
  });

  test('should have loading text when pokemons are not fetched', () => {
    const fetchPokemons = jest.fn();
    const filterPokemons = jest.fn();
    const props = {
      page: {
        isFetched: true,
        displayedPokemons: [],
      },
      pageActions: {
        fetchPokemons,
        filterPokemons,
      },
    };
    const PageComponent = shallow(<Page {...props} />);
    const loadingTextTag = PageComponent.find('p');
    expect(loadingTextTag.length).toBe(1);
    expect(loadingTextTag.text()).toBe('Loading...');
  });
  test('should have pokemons  when pokemons are fetched', () => {
    const fetchPokemons = jest.fn();
    const filterPokemons = jest.fn();
    const props = {
      page: {
        isFetched: false,
        displayedPokemons: [{ id: 1, name: 'balbasaur' }],
      },
      pageActions: {
        fetchPokemons,
        filterPokemons,
      },
    };
    const PageComponent = shallow(<Page {...props} />);
    const pokemons = PageComponent.find(Pokemon);
    expect(pokemons.length).toBe(1);
  });
  test('should throw when no props are passed', () => {
    expect(() => shallow(<Page />)).toThrow();
  });
});
