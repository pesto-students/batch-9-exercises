import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import Search from '../components/Search';

describe('<Search />', () => {
  beforeAll(() => {
    const mockFn = jest.fn();
    const props = { onChange: mockFn };
    const wrapper = shallow(<Search {...props} />);
  })
  test('<input> compulsorily renders', () => {
    const list = wrapper.find('input');
    expect(list).toHaveLength(1);
  });
  test('matches the snapshot', () => {
    const wrapper = shallow(<Search />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  test('makes no changes to passed prop', () => {
    const mockFn = jest.fn();
    const props = { onChange: mockFn };
    const wrapper = shallow(<Search {...props} />);
    const functionPassedAsProp = wrapper.find('input').props().onChange;
    expect(functionPassedAsProp).toBe(mockFn);
  });
  test('does not call passed function', () => {
    const mockFn = jest.fn();
    const props = { onChange: mockFn };
    shallow(<Search {...props} />);
    expect(mockFn).not.toHaveBeenCalled();
  });
});
