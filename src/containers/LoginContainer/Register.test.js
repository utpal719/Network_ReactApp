import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import Register from './Register'
import {TextField} from '@material-ui/core'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(`Register`, () => {
    it("form should take a name", () => {
        const wrapper = mount(<TextField label="Full Name" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a email", () => {
        const wrapper = mount(<TextField label="Email" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a mobile number", () => {
        const wrapper = mount(<TextField label="Mobile Number" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a mobile number", () => {
        const wrapper = mount(<TextField label="Mobile Number" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a user name", () => {
        const wrapper = mount(<TextField label="User Name" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a password", () => {
        const wrapper = mount(<TextField label="Password" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it('calls onSubmit prop function when form is submitted', () => {
        const onSubmitFn = jest.fn();
        const wrapper = mount(<form onSubmit={onSubmitFn}/>);
        const form = wrapper.find('form');
        form.simulate('submit');
        expect(onSubmitFn).toHaveBeenCalledTimes(1);
      });

});
