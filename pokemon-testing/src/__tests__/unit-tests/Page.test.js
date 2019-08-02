import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Page from '../../containers/Page/Page';

describe('<Page />', () => {
  describe('matches the snapshot', () => {
    test('when isFetched is false', () => {
      const fetchPokemons = jest.fn();
      const filterPokemons = jest.fn();
      const props = {
        page: {
          isFetched: false,
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

    test('when isFetched is true', () => {
      const fetchPokemons = jest.fn();
      const filterPokemons = jest.fn();
      const props = {
        page: {
          isFetched: true,
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

  test('should throw when no props are passed', () => {
    expect(() => shallow(<Page />)).toThrow();
  });
});
