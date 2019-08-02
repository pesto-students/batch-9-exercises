import React from 'react';
import { shallow } from 'enzyme';
import Jest from 'jest';

import Search from '../../components/Search';

describe('<Search>', () => {

    it('should shallow render component', () => {
        const handleChange = () => { };
        const wrapper = shallow(<Search onChange={handleChange} />);
        const input = wrapper.find('input');
        expect(input.length).toBe(1);
    });
    it('should have placeholder text', () => {
        const handleChange = () => { };
        const wrapper = shallow(<Search onChange={handleChange} />);
        const input = wrapper.find('input');
        expect(input.prop('placeholder')).toBe('Enter pokemon name...');
    });

    it('should have onChange prop', () => {
        const handleChange = jest.fn();
        shallow(<Search onChange={handleChange} />);
        expect(handleChange.mock.calls.length).toBe(0);
    });
});