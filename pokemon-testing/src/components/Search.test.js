import React from 'react';
import { shallow } from 'enzyme';

import Search from './Search';

describe('<Search />', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper).toMatchSnapshot();
  });
  test('has <input />', () => {
    const fn = jest.fn();
    const wrapper = shallow(<Search onChange={fn} />);
    expect(wrapper.props().onChange).toEqual(fn);
  });
});
