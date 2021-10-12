import { shallow } from "enzyme";
import React from "react";

import NavBar from "./NavBar";

describe("NavBar", () => {
  test.each([
    [0, "What is Pursuit?"],
    [1, "Create an account"],
    [2, "Sign in"],
  ])("child at %i is a button with %s", (index, text) => {
    const wrapper = shallow(<NavBar />);

    const button = wrapper.find("button").at(index);
    expect(button.text()).toBe(text);
  });
});
