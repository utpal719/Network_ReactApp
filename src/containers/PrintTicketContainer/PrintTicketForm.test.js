import React from 'react'
import { render, fireEvent} from '@testing-library/react'
import { mount } from 'enzyme';
import '@testing-library/jest-dom';
import PrintTicketForm from './PrintTicketForm'
import {TextField} from '@material-ui/core'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter() });

describe(`PrintTicketForm`, () => {
    it("form should take a pnr number", () => {
        const wrapper = mount(<TextField label="PNR Number" />);
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
