import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Search from '../../components/Search';

describe('<Search />', () => {
  test('matches the snapshot', () => {
    const mockFn = jest.fn();
    const props = { onChange: mockFn };
    const tree = shallow(<Search {...props} />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  test('does not changes the on change function', () => {
    const mockFn = jest.fn();
    const props = { onChange: mockFn };
    const searchComponent = shallow(<Search {...props} />);
    const functionPassedToInput = searchComponent.find('input').props().onChange;
    expect(functionPassedToInput).toBe(mockFn);
  });

  test('does not calls the on change function on its own', () => {
    const mockFn = jest.fn();
    const props = { onChange: mockFn };
    shallow(<Search {...props} />);
    expect(mockFn).not.toHaveBeenCalled();
  });

  describe('<input />', () => {
    test('calls the passed function when a text is written', () => {
      const mockFn = jest.fn();
      const props = { onChange: mockFn };
      const inputComponent = shallow(<Search {...props} />).find('input');
      inputComponent.simulate('change', { target: { value: 'foo' } });
      expect(mockFn).toHaveBeenCalled();
    });
  });
});
