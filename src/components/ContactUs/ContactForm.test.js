import React from 'react'
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import ContactForm from './ContactForm'
import { TextField } from '@material-ui/core'

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe(`ContactForm`, () => {
    it("form should take a input", () => {
        const wrapper = mount(<TextField label="Type your name here" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a name", () => {
        const wrapper = mount(<TextField label="We will keep it safe. We Promise!" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take an email", () => {
        const wrapper = mount(<TextField label="This will also be safe. We Promise!" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a journey date", () => {
        const wrapper = mount(<TextField label="Your tentative journey date" />);
        const input = wrapper.find('input');
        input.simulate('change', { target: { value: 'some text' } });
    })
    it("form should take a suggestion", () => {
        const wrapper = mount(<TextField label="Share with us your travel requirements that might help us to respond to your request" />);
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
