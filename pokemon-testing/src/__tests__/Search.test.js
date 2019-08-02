import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Search from '../components/Search';

describe('<Search />', () => {
  test('matches the snapshot', () => {
    const search = shallow(<Search onChange={() => {}} />);
    expect(toJson(search)).toMatchSnapshot();
  });
  test('should have an onChange prop', () => {
    const fn = jest.fn();
    const search = shallow(<Search onChange={fn} />);
    const onChangeProp = search.prop('onChange');
    expect(onChangeProp).toBe(fn);
  });
  test('should not call the onChange prop', () => {
    const fn = jest.fn();
    shallow(<Search onChange={fn} />);
    expect(fn).not.toHaveBeenCalled();
  });
});
