import React from "react";
import {TestUtils} from 'react-dom/test-utils'
import { mount,shallow } from "enzyme";
import "@testing-library/jest-dom";
import Form from "./Form";
import {TextField,DatePicker} from "@material-ui/core"
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe(`Form`, () => {
  it("form should take a Source", () => {
    const wrapper = mount(<TextField data-testid="fromInput" />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "some text" } });
  });
  it("form should take a Destination", () => {
    const wrapper = mount(<TextField data-testid="toInput" />);
    const input = wrapper.find("input");
    input.simulate("change", { target: { value: "some text" } });
  });
  it("calls onSubmit prop function when form is submitted", () => {
    const onSubmitFn = jest.fn();
    const wrapper = mount(<form onSubmit={onSubmitFn} />);
    const form = wrapper.find("form");
    form.simulate("submit");
    expect(onSubmitFn).toHaveBeenCalledTimes(1);
  });
});
