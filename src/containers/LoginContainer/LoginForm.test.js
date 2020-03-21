import React from 'react'
import {TextField} from '@material-ui/core'
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import LoginForm from './LoginForm'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(`LoginForm`, () => {
    it("form should take a User Name", () => {
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
